// import {getClientsFromFuenlabrada}from "./clients.js"

// 1. Devuelve un listado con el código de oficina y la ciudad 
// donde hay oficinas.
export const getAllOficceAndCodeCity = async()=>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return {
            code_office: val.code_office,
            city: val.city
        }
    })
    return dataUpdate;
}

//2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
export const getAllCityNamesAndMovilNUmbersOfSpanishOffices = async ()=>{
    let res = await fetch ("http://localhost:5504/offices?country=spain")
    let data = await res.json();
    let spanishInfo = data.map(val =>{
        return{
            city: val.city + " " + val.country,
            movil: val.movil
            }
    })
    return spanishInfo
}



// Obtener toda la informacion de la oficina por codigo
export const getOfficesByCode = async(code) =>{
    let res = await fetch(`http://localhost:5504/offices?code_office=${code}`);
    let dataClients = await res.json();
    return dataClients;
}


