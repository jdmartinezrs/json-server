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
  
    return dataUpdate
}

// 8 Devuelve un listado con el código de cliente de aquellos clientes 
// que realizaron algún pago en 2008. Tenga en cuenta que deberá 
// eliminar aquellos códigos de cliente que aparezcan
// repetidos. Resuelva la consulta:

export const getAllCodeClientsWhoPayedInTwoThousanEight = async () =>{
    let res = await fetch ("http://localhost:5505/payments")
    let data = await res.json();
    let clientUpdated = data.map(val =>{
        
        return{clientesQuePagaronEnEl2008: val.code_client + " " + val.date_payment
        
        };
    });
        return clientUpdated; 
     }
    



        
    // let dataUpdated = [];
    // data.filter(val => {
        // let { code_client , date_payment } = val
        // let [year] = date_payment.split("-")
        // if(year ==="2008"){
        //     codeCLients.add(code_client);
        // }
       