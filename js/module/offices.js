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
export const getOfficesByCode = async(code)=>{
    let res = await fetch(`http://localhost:5504/offices?code_office=${code}`)
    let data = await res.json();
    return data
}


///////multitabla//////////

//6. Lista la dirección de las oficinas que tengan clientes en Fuenlabrada.
// Fuenlambra es un municipio y una ciudad española que forma parte de la Comunidad de Madrid. Se encuentra dentro del área metropolitana de Madrid y está situada a diecisiete kilómetros al suroeste de la capital.​


// export const getOfficesWithClientsInFuenlabrada = async () => {
//     let res = await fetch("http://localhost:5504/offices?city=Fuenlabrada");
//     let offices = await res.json();
    
//     for (let i = 0; i < offices.length; i++) {
//         let {
//             country: countryOffice,
//             region: regionOffice,
//             postal_code: postal_codeOffice,
//             movil,
//             address1: address1Office,
//             address2: address2Office,
//             id: idOffice,
//             city,
//             ...officeUpdate
//         } = offices[i];

//         if (city === "Fuenlabrada") {
//             let [client] = await getClientsFromFuenlabrada(city);

//             if (client) {
//                 let {
//                     extension,
//                     email,
//                     code_boss,
//                     position,
//                     id: idEmploy,
//                     name,
//                     lastname1,
//                     lastname2,
//                     code_office,
//                     employee_code,
//                     ...employUpdate
//                 } = client;

//                 let data = { ...employUpdate, ...officeUpdate };
//                 data.name_employee = `${name} ${lastname1} ${lastname2}`;
//                 offices[i] = data;
//             }
//         }
//     }
    
//     return offices;
// };