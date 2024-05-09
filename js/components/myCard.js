 export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.innerHTML =/*html*/`
            <div class="report__card">
                <div class="card__title">
                    <div>....</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>.....</p>
                        <p><b>Ciudad: </b>....</p>
                    </div>
                </div>
        </div>  
        `
    }
    static get observedAttributes(){
        return ["query"]

    }
    attributeChangedCallback(name,old,now){
        if (name == "query") console.log(now);
       
    }
}

