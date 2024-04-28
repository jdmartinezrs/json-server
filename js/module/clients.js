import{getEmployeeSaleAgent,getEmployeesSales} from "./employees.js";
import{getPaymentsWithSales } from "./payments.js";
import{getOfficesByCode } from "./offices.js";

//6. Devuelve un listado con el nombre de los todos los clientes españoles.

export const  getAllSpanishClientsNames = async()=>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let spanishClients = data.map(val =>{
        return{
            fullname: val.contact_name + " " + val.contact_lastname,
            country: val.country 
        };
       
    });
    return spanishClients;
}  

//8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:

export const getListClientsPayIn2008=async()=>{
    let res =await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdateSet = new Set(data.map(dev=>dev.client_code))
    let dataUpdate=[...dataUpdateSet]
    let paysinsandeight= Array.from(dataUpdate)
    return paysinsandeight
}


// 16. Devuelve un listado con todos los clientes que sean de la 
// ciudad de Madrid y cuyo representante de ventas tenga el código 
// de empleado 11 o 30.
export const getAllMadridClients=async()=>{
    let res = await fetch("http://localhost:5501/clients?city=Madrid")
    let data = await res.json();
    let dataUpdate=[];
    data.forEach(val => {
        if(val.code_employee_sales_manager==11||val.code_employee_sales_manager==30){
            dataUpdate.push(val)
        }
    })
    
    return dataUpdate;
}


/////////////////multitabla////////////////

//1. Devuelve un listado con el código de pedido, código de cliente, 
//fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getClientAndSaleAgentFullName = async() => {
    let resClients = await fetch ("http://localhost:5501/clients")
    let dataClients = await resClients.json ();
    let dataUpdated = []

    for(let i = 0; i < dataClients.length; i++){
        let [employees]= await getEmployeeSaleAgent(dataClients[i].code_employee_sales_manager);
        dataUpdated.push({
            nombre: dataClients[i].clients_name,
            nombre_manager: `${employees.name} ${employees.lastname1} ${employees.lastname2}`
        })
    }
    return dataUpdated
}


// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getClientsWithSalesRepresentatives = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsWithPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];


        let [pay] = await getPaymentsWithSales(client_code);

        // Si hay pagos asociados, incluir al cliente en la lista de clientes con pagos
        if (pay) {
            let [employ] = await getEmployeesSales(code_employee_sales_manager);
            let {
                client_code,
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let {
                code_client,
                payment: paymentClients,
                id_transaction: transactionClients,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = pay;

            let dataUpdate = {
                ...clientsUpdate,
                ...employUpdate,
                ...paymentsUpdate
            };

            dataUpdate.sales_mannager = `${name} ${lastname1} ${lastname2}`;
            clientsWithPayments.push(dataUpdate);
        }
    }
    return clientsWithPayments;
};


// 3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.


export const getClientsWithoutPayments = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsWithoutPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

        // Obtener los pagos asociados al cliente
        let [pay] = await getPaymentsWithSales(client_code);

        // Si no hay pagos asociados, incluir al cliente en la lista de clientes sin pagos
        if (!pay) {
            let [employ] = await getEmployeesSales(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let dataUpdate = {
                ...clientsUpdate,
                ...employUpdate
            };

            dataUpdate.sales_mannager = `${name} ${lastname1} ${lastname2}`;
            clientsWithoutPayments.push(dataUpdate);
        }
    }
    return clientsWithoutPayments;
};


// 4.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.


export const getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsWithPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

        let [pay] = await getPaymentsWithSales(client_code);

        // Si hay pagos asociados, incluir al cliente en la lista de clientes con pagos
        if (pay) {
            let [employ] = await getEmployeesSales(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let {
                code_client,
                payment: paymentClients,
                id_transaction: transactionClients,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = pay;

            let [office] = await getOfficesByCode(code_office);

            if (office) {
                let {
                    country: countryOffice,
                    region: regionOffice,
                    postal_code: postal_codeOffice,
                    movil,
                    code_office,
                    address1: address1Office,
                    address2: address2Office,
                    id: idOffice,
                    ...officeUpdate
                } = office;

                let dataUpdate = {
                    ...clientsUpdate,
                    ...employUpdate,
                    ...paymentsUpdate,
                    ...officeUpdate
                };

                dataUpdate.sales_manager = `${name} ${lastname1} ${lastname2}`;
                clientsWithPayments.push(dataUpdate);
            } 
        }
    }
    return clientsWithPayments;
};


// 5. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsWithoutPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

        // Obtener los pagos asociados al cliente
        let [pay] = await getPaymentsWithSales(client_code);

        // Si no hay pagos asociados, incluir al cliente en la lista de clientes sin pagos
        if (!pay) {
            let [employ] = await getEmployeesSales(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            // Obtener la información de la oficina a partir del código de la oficina del representante
            let [office] = await getOfficesByCode(code_office);
            if (office) {
                let {
                    country: countryOffice,
                    region: regionOffice,
                    postal_code: postal_codeOffice,
                    movil,
                    code_office,
                    address1: address1Office,
                    address2: address2Office,
                    id: idOffice,
                    ...officeUpdate
                } = office;

                let dataUpdate = {
                    ...clientsUpdate,
                    ...employUpdate,
                    ...officeUpdate
                };

                dataUpdate.sales_manager = `${name} ${lastname1} ${lastname2}`;
                clientsWithoutPayments.push(dataUpdate);
            }
        }
    }
    return clientsWithoutPayments;
};


export const getClientsFromFuenlabrada = async (code) => {
    let res = await fetch(`http://localhost:5501/clients?city=${code}`);
    let dataClients = await res.json();
    return dataClients;
}