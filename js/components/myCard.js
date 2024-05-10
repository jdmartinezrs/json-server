import { getClientsEmploy, getAllSpanishClientsNames,getAllMadridClients,getListClientsPayIn2008 } from "../module/clients.js";
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
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del cliente: </b>${val.name_employee}</p>
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

async getListClientsPayIn2008Design(){
    let data = await getListClientsPayIn2008();
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/`
        <div class="report__card">
       <div class="card__title">
       </div>
       <div class="card__body">
           <div class="body__marck">
               <p><b>Código del cliente:</b>${val.client_code}</p>
               
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
        if (name == "query" && now =="getListClientsPayIn2008") this.getListClientsPayIn2008Design();  
    }
}


