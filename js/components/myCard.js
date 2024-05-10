import { getClientsEmploy, getAllSpanishClientsNames,getAllMadridClients,getClientsWithSalesRepresentatives,getClientsWithoutPayments,getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity,
getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity
    
 } from "../module/clients.js";
// import{getEmployeeSaleAgent} from "./employees.js";
 export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.innerHTML =/*html*/`
            <link rel="stylesheet" href="../css/myCard.css"> 
        `
    }
    async getClientsEmployDesign(){
        let data = await getClientsEmploy();
        data.forEach(val => {
            this.shadowRoot.innerHTML +=/*html*/`
                 <div class="report__card">
                <div class="card__title">
                  
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del cliente: </b>${val.client_name}</p>
                        <p><b>Nombre del representante: </b>${val.name_employee}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                    </div>
                 </div>
            </div>
            `;
        });
    }

    async getAllSpanishClientsNamesDesign(){
        let data = await getAllSpanishClientsNames();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
           <div class="card__title">
           </div>
           <div class="card__body">
               <div class="body__marck">
                   <p><b>Name: </b>${val.clientName}</p>
                   <p><b>LastName:</b>${val.clientLastName}</p>
                   <p><b>Pais: </b>${val.country}</p>
               </div>
            </div>
       </div>
       `;
   });

}

    async getAllMadridClientsDesign(){
        let data = await getAllMadridClients();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
           <div class="card__title">
           </div>
           <div class="card__body">
               <div class="body__marck">
                   <p><b>Nombre:</b>${val.client_name}</p>
                   <p><b>ciudad:</b>${val.city}</p>
                   <p><b>Codigo_empleado_salesmanager: </b>${val.code_employee_sales_manager}</p>
               </div>
            </div>
       </div>
       `;
   });

}

async getClientsWithSalesRepresentativesDesign(){
    let data = await getClientsWithSalesRepresentatives();
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/`
        <div class="report__card">
       <div class="card__title">
       </div>
       <div class="card__body">
           <div class="body__marck">
               <p><b> Nombre del cliente:</b>${val.client_name}</p>
               <p><b>Nombre del Sales Mannager :</b>${val.sales_mannager}</p>
               
           </div>
        </div>
   </div>
   `;
});

}

async getClientsWithoutPaymentsDesign(){
    let data = await getClientsWithoutPayments();
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/`
        <div class="report__card">
       <div class="card__title">
       </div>
       <div class="card__body">
           <div class="body__marck">
               <p><b> Sales Mannager :</b>${val.sales_mannager}</p>
               <p><b> Clientes que no han pagado:</b>${val.client_name}</p>
               
               
           </div>
        </div>
   </div>
   `;
});

}


async getClientsWithPaymentsAndSalesRepresentativesAndOfficeCityDesign(){
    let data = await getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity();
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/`
        <div class="report__card">
       <div class="card__title">
       
       </div>
       <div class="card__body">
           <div class="body__marck">
               <p><b> Nombre del Cliente :</b>${val.client_name}</p>
               <p><b> Ciudad:</b>${val.city}</p>
               
               
               
           </div>
        </div>
   </div>
   `;
});

}

async getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCityDesign (){
    let data = await getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity ();
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/`
        <div class="report__card">
       <div class="card__title">
       
       </div>
       <div class="card__body">
           <div class="body__marck">
               <p><b> Nombre del Cliente :</b>${val.client_name}</p>
               <p><b> Sales mannager :</b>${val.sales_manager}</p>
               <p><b> Ciudad:</b>${val.city}</p>
               
               
               
           </div>
        </div>
   </div>
   `;
});

}


    static get observedAttributes(){
        return ["query"]

    }
    attributeChangedCallback(name,old,now){
        if (name == "query" && now =="getAllSpanishClientsNames") this.getAllSpanishClientsNamesDesign();
        if (name == "query" && now =="getClientsEmploy") this.getClientsEmployDesign();
        if (name == "query" && now =="getAllMadridClients") this.getAllMadridClientsDesign();
        if (name == "query" && now =="getClientsWithSalesRepresentatives") this.getClientsWithSalesRepresentativesDesign();
        if (name == "query" && now =="getClientsWithoutPayments") this.getClientsWithoutPaymentsDesign();  
        if (name == "query" && now =="getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity") this.getClientsWithPaymentsAndSalesRepresentativesAndOfficeCityDesign();  
        if (name == "query" && now =="getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity") this.getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCityDesign();  
    }
}


