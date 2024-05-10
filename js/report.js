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
            <my-details logic="getBossFullNameAndEmail" query = "4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa."></my-details>
            <my-details logic="getAllFullnamePositionDiferentSalesRepresentative" query = "5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas."></my-details>
            <my-details logic="getEmployeesWithBossesAndBossesOfBosses" query = "8.Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes."></my-details>
            
            `;
        }

        if(e.target.innerHTML=="offices"){
            report__details.innerHTML = /*html*/`

            <my-details logic="getAllOficceAndCodeCity" query = "1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas."></my-details>

            <my-details logic="getAllCityNamesAndMovilNUmbersOfSpanishOffices" query = "2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España."></my-details>
            
            `;
        }

        if(e.target.innerHTML=="payments"){
            report__details.innerHTML = /*html*/`

            <my-details logic="getAllPaymentsFromPayPalEachYear" query = "13. Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor."></my-details>
            
            <my-details logic="getAllPaymentMethods" query = "14. Devuelve un listado con todas las formas de pago que aparecen en la tabla pago.
            Tenga en cuenta que no deben aparecer formas de pago repetidas."></my-details>
            
            `;
        }

        if(e.target.innerHTML=="product"){
            report__details.innerHTML = /*html*/`

            <my-details logic="getAllOrnamentalProductsWithMoreThan100Stock" query = "15. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock.El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio."></my-details>
            
            `;
        }

        if(e.target.innerHTML=="requests"){
            report__details.innerHTML = /*html*/`

            
            <my-details logic="getAllTheProductStatus" query = "7.Devuelve un listado con los distintos estados por los que puede pasar un pedido."></my-details>

            <my-details logic="getAllRequestsOutOfTime" query = "9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y
            //fecha de entrega de los pedidos que no han sido entregados a tiempo."></my-details>
            <my-details logic="getAllRequestsWithTwoDaysOfAnticipation" query = "10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega
            //de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada"></my-details>
            <my-details logic="getAllRejectedRequestAtTwoThosuandNine" query = "11. Devuelve un listado de todos los pedidos que fueron **rechazados** en 2009"></my-details>
            <my-details logic="getAllJanuaryDeliveredAnyYear" query = "12. Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año."></my-details>
            `;
        }



    })
})
let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)

