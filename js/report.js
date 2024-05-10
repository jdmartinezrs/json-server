import "./components/clock.js";
import { Mycard } from "./components/myCard.js";
import { Mydetails } from "./components/myDetails.js";


let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")
btn.forEach(val =>{
    val.addEventListener("click", (e)=>{
        for(let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")
        
        if(e.target.innerHTML=="clients"){
            report__details.innerHTML = /*html*/`
            <my-details logic="getClientsWithSalesRepresentatives" query =  " 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>
            <my-details logic="getClientsWithoutPayments" query =  " 3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>
            <my-details logic="getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity" query =  " 4.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
            <my-details logic="getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity" query =  "5. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
             <my-details logic="getAllSpanishClientsNames" query = "6. Devuelve un listado con el nombre de los todos los clientes españoles."></my-details>
             <my-details logic="getClientsEmploy" query = "7. Devuelve el nombre de los clientes y el nombre de sus representantes 
             junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
            <my-details logic="getAllMadridClients" query = "16. Devuelve un listado con todos los clientes que sean de la 
            // ciudad de Madrid y cuyo representante de ventas tenga el código 
            // de empleado 11 o 30."></my-details>
            `
        }
        if(e.target.innerHTML=="employees"){
            report__details.innerHTML = /*html*/`
            
            <my-details logic="getAllFullNameAndEmailsAndBoss" query = "3. Devuelve un listado con el nombre, apellidos y email de los empleados 
            // cuyo jefe tiene un código de jefe igual a 7."></my-details>
            
            `;
        }

    })
})
let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)

