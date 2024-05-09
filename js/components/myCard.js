import { getClientsEmploy, getAllSpanishClientsNames } from "../module/clients.js";

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
            this.shadowRoot.innerHTML +=/*html*/`
            <div class="report__card">
           <div class="card__title">
               <div>${val.client_name}</div>
           </div>
           <div class="card__body">
               <div class="body__marck">
                   <p><b>Nombre del cliente: </b>${val.client_name}</p>
                   <p><b>Ciudad: </b>${val.country}</p>
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

        
       
    }
}

