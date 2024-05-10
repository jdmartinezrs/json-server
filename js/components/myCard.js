import { getClientsEmploy, getAllSpanishClientsNames,getAllMadridClients,getClientsWithSalesRepresentatives,getClientsWithoutPayments,getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity,
getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity

    
 } from "../module/clients.js";

 import {
    getAllFullNameAndEmailsAndBoss,getBossFullNameAndEmail,getAllFullnamePositionDiferentSalesRepresentative,
    getEmployeesWithBossesAndBossesOfBosses

} from "../module/employees.js";

import {getAllOficceAndCodeCity,getAllCityNamesAndMovilNUmbersOfSpanishOffices
    
} from "../module/offices.js";

import { getAllPaymentsFromPayPalEachYear,getAllPaymentMethods

} from "../module/payments.js";

import { getAllOrnamentalProductsWithMoreThan100Stock

} from "../module/product.js";




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

    async getAllFullNameAndEmailsAndBossDesign (){
        let data = await getAllFullNameAndEmailsAndBoss ();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
           <div class="card__title">
           
           </div>
           <div class="card__body">
               <div class="body__marck">
                   <p><b> Nombre del empleado :</b>${val.fullname}</p>
                   <p><b> E-mail :</b>${val.email}</p>
                   <p><b> codigo del jefe:</b>${val.codigodeljefe}</p>
               </div>
            </div>
       </div>
       `;
    });
    
    }


    async getBossFullNameAndEmailDesign (){
        let data = await getBossFullNameAndEmail ();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
           <div class="card__title">
           
           </div>
           <div class="card__body">
               <div class="body__marck">
                   <p><b> Nombre del puesto :</b>${val.position}</p>
                   <p><b> fullName:</b>${val.fullname}</p>
                   <p><b> E-mail:</b>${val.email}</p>
               </div>
            </div>
       </div>
       `;
    });
    
    }



    async getAllFullnamePositionDiferentSalesRepresentativeDesign (){
        let data = await getAllFullnamePositionDiferentSalesRepresentative();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
           <div class="card__title">
           
           </div>
           <div class="card__body">
               <div class="body__marck">
                   <p><b> Posición :</b>${val.position}</p>
                   <p><b> Nombre completo :</b>${val.fullname}</p>
                  
               </div>
            </div>
       </div>
       `;
    });
    
    }

    async getEmployeesWithBossesAndBossesOfBossesDesign(){
        let data = await getEmployeesWithBossesAndBossesOfBosses();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
           <div class="card__title">
           </div>
           <div class="card__body">
               <div class="body__marck">
               <p><b> Empleado :</b>${val.name}</p>
               <p><b> Jefe :</b>${val.boss}</p>
                  
               </div>
            </div>
       </div>
       `;
    });
    
    }



    async getAllOficceAndCodeCityDesign(){
        let data = await getAllOficceAndCodeCity();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
           <div class="card__title">
           </div>
           <div class="card__body">
               <div class="body__marck">
               <p><b> Código Oficina :</b>${val.code_office}</p>
               <p><b> Ciudad :</b>${val.city}</p>
                  
               </div>
            </div>
       </div>
       `;
    });
    
    }




    async getAllCityNamesAndMovilNUmbersOfSpanishOfficesDesign(){
        let data = await getAllCityNamesAndMovilNUmbersOfSpanishOffices();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
           <div class="card__title">
           </div>
           <div class="card__body">
               <div class="body__marck">
               <p><b> Ciudad :</b>${val.city}</p>
               <p><b> Teléfono :</b>${val.movil}</p>
                  
               </div>
            </div>
       </div>
       `;
    });
    
    }

    
    
    
        static get observedAttributes(){
            return ["query"]
    
        }

        async getAllPaymentsFromPayPalEachYearDesign(){
            let data = await getAllPaymentsFromPayPalEachYear();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
               <div class="card__title">
               </div>
               <div class="card__body">
                   <div class="body__marck">
                   <p><b> Total :</b>${val.total}</p>
                   <p><b> Fecha :</b>${val.date_payment}</p>
                   <p><b> Forma de pago :</b>${val.payment}</p>
                      
                   </div>
                </div>
           </div>
           `;
        });
        
        }

        async getAllPaymentMethodsDesign(){
            let data = await getAllPaymentMethods();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
               <div class="card__title">
               </div>
               <div class="card__body">
                   <div class="body__marck">
                   <p><b> Formas de pago:</b>${val.payWays}</p>
                  
                      
                   </div>
                </div>
           </div>
           `;
        });
        
        }



           async getAllOrnamentalProductsWithMoreThan100StockDesign(){
            let data = await getAllOrnamentalProductsWithMoreThan100Stock();
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
               <div class="card__title">
               </div>
               <div class="card__body">
                   <div class="body__marck">
                   <p><b> Precio:</b>${val.price_sale}</p>
                   <p><b> Gama:</b>${val.gama}</p>
                   <p><b> Stock:</b>${val.stock}</p>
                  
                      
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
        
        


        if (name == "query" && now =="getAllFullNameAndEmailsAndBoss") this.getAllFullNameAndEmailsAndBossDesign(); 
        
        if (name == "query" && now =="getBossFullNameAndEmail") this.getBossFullNameAndEmailDesign(); 
        if (name == "query" && now =="getAllFullnamePositionDiferentSalesRepresentative") this.getAllFullnamePositionDiferentSalesRepresentativeDesign();
        if (name == "query" && now =="getEmployeesWithBossesAndBossesOfBosses") this.getEmployeesWithBossesAndBossesOfBossesDesign();  



        if (name == "query" && now =="getAllOficceAndCodeCity") this. getAllOficceAndCodeCityDesign();  
        if (name == "query" && now =="getAllCityNamesAndMovilNUmbersOfSpanishOffices") this. getAllCityNamesAndMovilNUmbersOfSpanishOfficesDesign(); 


        if (name == "query" && now =="getAllPaymentsFromPayPalEachYear") this. getAllPaymentsFromPayPalEachYearDesign();  
        if (name == "query" && now =="getAllPaymentMethods") this. getAllPaymentMethodsDesign();  


        if (name == "query" && now =="getAllOrnamentalProductsWithMoreThan100Stock") this. getAllOrnamentalProductsWithMoreThan100StockDesign();  
        
        
       
    }

   
    
}


