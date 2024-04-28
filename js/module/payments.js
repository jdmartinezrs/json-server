// 13 Devuelve un listado con todos los pagos que se realizaron en el 
// año 2008 mediante Paypal. Ordene el resultado de mayor a menor.

export const getAllPaymentsFromPayPalEachYear = async() =>{
    let res = await fetch("http://localhost:5505/payments?payment=PayPal")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let { date_payment } = val 
        let [year] =  date_payment.split("-")
        if(year == "2008"){
            dataUpdate.push(val)
        }
    });
    dataUpdate.sort((a, b) => {
        const dateA = new Date(a.date_payment);
        const dateB = new Date(b.date_payment);
        return dateB - dateA;
    });
    let payFromEachYear = Array.from(dataUpdate)
    return payFromEachYear
}

//14. Devuelve un listado con todas las formas de pago que aparecen en la tabla pago.
//Tenga en cuenta que no deben aparecer formas de pago repetidas.
export const getAllPaymentMethods = async()=>{
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json();
    let dataUpdate =  new Set();
    data.forEach(val=>{
        dataUpdate.add(
            val.payment
        )
    })
    let payWays= Array.from(dataUpdate)
    return payWays
}

// Consultas multitabla (Composición interna)

// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
// 3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.


//Obtener el pago de algun cliente mediante codigo
export const getAllPaymentByClientCode = async (code ="") =>{
    let res = await fetch(`http://localhost:5507/payments?code_client=${code}`);
    let data = await res.json();
    return data;
}


export const getPaymentsWithSales = async (code) => {
    let res = await fetch(`http://localhost:5505/payments?code_client=${code}`);
    let dataClients = await res.json();
    return dataClients;
}


