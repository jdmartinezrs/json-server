
// 16. Devuelve un listado con todos los clientes que sean de la 
// ciudad de Madrid y cuyo representante de ventas tenga el código 
// de empleado 11 o 30.
export const getAllClientsFromCityAndCode = async()=>{
    let res = await fetch("http://localhost:5501/clients?city=Madrid")
    let data = await res.json();
    let clientUpdate = [];
    clientUpdate = data.filter(val => val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30);
    return clientUpdate
}
// Consultas multitabla
// 7. Devuelve el nombre de los clientes y el nombre de sus representantes
// junto con la ciudad de la oficina a la que pertenece el representante.
export const getAll = async()=>{
    let res = await fetch("http://localhost:5501/clients")
    let client = await res.json();
    for (let i = 0; i < client.length; i++) {
        // Actualiza la data clientes eliminando identificadores que no queremos
        let { 
            id:id_client,
            limit_credit,
            postal_code:postal_code_client,
            country:country_client,
            region:region_client,
            city,
            address2:address2_client,
            address1:address1_client,
            fax,
            phone,
            ...clientUpdate} = client[i]
            client[i] = clientUpdate
        // Realizamos la consulta al fucion modular de los empleados para buscar
        // la informacion del empleado segun su id de la data cliente anterior
        // buscada
        let [employee] = await getEmployeesByCode(clientUpdate.code_employee_sales_manager)
        
        let {
            id:id_employee,
            extension,
            email,
            code_boss,
            position,
            ...employeeUpdate
        } = employee
        let [office] = await getOfficesByCode(employeeUpdate.code_office)
        let {
            id:id_office,
            country,
            region,
            postal_code,
            movil,
            address1,
            address2,
            ...officeUpdate
        } = office
        let data = {...clientUpdate, ...employeeUpdate, ...officeUpdate}
        // {  
        //     client_code: 38,
        //     client_name: 'El Jardin Viviente S.L',
        //     contact_name: 'Justin',
        //     contact_lastname: 'Smith',
        //     code_employee_sales_manager: 31,
        //     employee_code: 31,
        //     name: 'Mariko',
        //     lastname1: 'Kishi',
        //     lastname2: '',
        //     code_office: 'SYD-AU',
        //     city: 'Sydney'
        //   }
        client[i] = {
            client_name: `${data.client_name}`,
            employees_full_name: `${data.name} ${data.lastname1} ${data.lastname2}`,
            employees_office_code: data.code_office,
            city_employees: data.city
        }
        
    }
    return client;
}


// 6. Devuelve un listado con el nombre 
// de los todos los clientes españoles.

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


// 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

export const getAllclientNamesAndMannagerFullName= async()=>{
    let res= await fetch ("http://localhost:5501/clients?")
    let data = await res.json();
    let dateUpdated = data.map (val =>{
        return { client_name: val.contact_name +" "+
     val.contact_lastname};
    });
    return dateUpdated
}

//1. Obten un listado con el nombre de cada cliente y el nombre y apellido de
//su representante de ventas.
export const getAllClientsAndSalesManagersName = async()=>{
    let res=await fetch("http://localhost:5501/clients")
    let client =await res.json();
    for(let i = 0; i < client.length;i++){
        let{
            "client_name": client_name,
            "code_employee_sales_manager": code_employee_sales_manager,
            ...clientUpdate} = client[i];
            client[i] = clientUpdate;
        let [ employee ] = await getAllEmployeeNames(clientUpdate.code_employee_sales_manager);
        let { 
            "name": first_name,
            "lastname1": lastname1,
            "lastname2": lastname2,
            ...employeeUpdate} = employee;
        
        let data = {...clientUpdate, ...employeeUpdate};
        client[i]={
            "client_name": `${data.client_name}`,
            "sales_manager_complete_name": `${data.name} ${data.lastname1} ${data.lastname2}`
        }
    }
    return client;
}

///### Consultas multitabla (Composición interna)

import { 
    getOfficesByCode, getPaymentByClientCode,getEmployeeByCode,getAllClientsWithDelayDelivery
} from "./main.js";



//1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

export const getAllEachClientNameAndSalesMan = async () => { 
    let res = await fetch("http://localhost:5501/clients");
    let data = await res.json();
    for(let i=0; i<data.lenght; i++){
        let[dataEmployee]= await getAllEmployeesByCode(data[i].code_employee_sales_manager)
        data[i] = {
            client_name: data[i].client_name,
            manager_name: `${dataEmployee.name} ${dataEmployee.lastname1} ${dataEmployee.lastname2}`
        }
    }
    return data;
}

//2. Muestra el nombre de los clientes que hayan realizado pagos junto //con el nombre de sus representantes de ventas.

export const getAllClientWhoPayedNamesAndSalesMan = async () => {
    let payment = await getAllPaymentByClientCode()
    let dataUpdate = []
    for(const val of payment){
        let res = await fetch ("http://localhost:5501/clients?client_code=${val.code_client}");
        let data = await res.json();
        let [dataEmployee] = await getAllEmployeesByCode (data[0].code_employee_sales_manager)
        if(!dataUpdate.some(elmt => elmt.client_name == data [0].client_name)){
            let datos = ({
                client_name: data[0].client_name,
                client_code: val.code_client,
                manager_name: `${dataEmployee.name} ${dataEmployee.lastname1} ${dataEmployee.lastname2}`,
                manager_code: dataEmployee.employee_code 
            })
            dataUpdate.push(datos)
        }
    }
    return dataUpdate;
}

//3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getAllClientWhoNotPayedNamesAndSalesMan = async () => {
    let res = await fetch ("http://localhost:5501/clients").then(res => res.json());
    let dataUpdated = [];
    for(const val of res){
        let [employee] = await getEmployeeByCode(val.code_employee_sales_manager);
        let [pago] = await getPaymentByClientCode(val.client_code)
        if(pago == undefined) dataUpdated.push({
            client_name: val.client_name,
            clientCode: Val.client_code,
            manager_name: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
            manager_code: val.code_employee_sales_manager

        })
        return dataUpdated;
    }

    //4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

// export const getAllClientesThatAlreadyPayedAndSalesManOffices = async () =>{let    clients = await getAllClientNameAndSalesManagerWithPayment();
//         let dataUpdate= [];
//         for(const client of clients){
//             let [dataEmployee] = await getEmployeeByCode(dataEmployee.code_office);
//             let[offices]= await getOfficesByCode(dataEmployee.code_office);
//             if(!dataUpdate.some(elmt => elmt.client_name ==client.client_name)){
//                 dataUpdate.push({
//                     client_name: client.client_name,
//                     manager_name: `${dataEmployee.name} ${dataEmployee.lastname1} ${dataEmployee.lastname2}`,
//                     city: offices.city
//                 })
//             }
//         }
//         return dataUpdate;
    
// }
     
//5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getAllNotAlreadyClientsPaymentsAndManagerOffices = async() =>{
    let clients = await getAllClientNameAndSalesManagerWithoutPayment();
    let dataUpdate = [];
    for(const client of clients){
        let [dataEmployee] = await getEmployeeByCode(client.Manager_Code);
        let [offices] = await getOfficesByCode(dataEmployee.code_office);
        if(!dataUpdate.some(elmt => elmt.Client_name == client.Client_name)){
            dataUpdate.push({
                Client_name: client.Client_name,
                Manager_name: `${dataEmployee.name} ${dataEmployee.lastname1} ${dataEmployee.lastname2}`,
                City: offices.city
            })
        }
    }
    return dataUpdate;
}

//6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.

export const getAllAddresWithClietnsInFuenlabra = async() => {
    let res = await fetch ("http://localhost:5501/clients?city=Fuenlabrada")
    .then(res => res.json());
    let dataUpdate=[];
    for(const val of res){
        let [employee]= await getEmployeeByCode(val.code_employee_sale_manager)
        let {code_office}= employee
        let [officeDirection]= await getOfficesByCode
        (code_office)
        dataUpdate.push({
            cliente: val.client_name,
            encargado: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
            Oficina: code_office,
            direccionOficina: `${officeDirection.address1} ${officeDirection.address2}`
        })
    }
    return dataUpdate;
}


//10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.

export const getAllClientsWithDelayDelivery = async () => {
    let res = await fetch ("http://localhost:5501/clients").then(res => res.json());
    let dataUpdate = res.map(async(val)=>{
        let pedido = await getAllOrdersByClientCode(val.client_code);
        let devData = []
        Periodio.forEach(elmt =>{
            if(elmt.date_delivery == null)return
            let stimateDt =elmt.data_wait
            let arrivedDt = elmt.date_delivery
            stimatedDt = stimatedDt.slplit("-")
            arrivedDt = arrivedDt.split("-")
            let mesEserado = Number (stimateDt[ stimateDt.length -2])
            let mesEntregado = Number(arrivedDt[arrivedDt.length - 2])
            let diaEsperado = Number(stimateDt[stimateDt.length - 1])
            let diaEntregado = Number(arrivedDt[arrivedDt.length - 1])
            if((mesEntregado > mesEsperado ))||(mesEntragadi ==mesEsperado && diaEntregado > diaEsperado)){
                devData.push({
                    Client_name: val.client_name,
                    Fecha_Estimada: stimateDt.join("-"),
                    Fecha_Entregada: arrivedDt.join("-"),
                })
            }
        })
        return devData
    })
    let newArr = await Promise.all(dataUpdate)
    newArr = newArr.filter(respo => respo.length > 0)
    return newArr
}
}


