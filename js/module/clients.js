
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


