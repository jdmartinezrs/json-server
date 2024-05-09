export class Mydetails extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.innerHTML = /*html*/`
        <link rel="stylesheet" href="../css/myDetails.css">
            <details id="queryAboutTable7">
            <summary>
                <div class="details__description">Campus: </div>
                <div class="details__container">
                    <p><marquee behavior="" direction="">Consultas sobre una tabla 6.Devuelve un listado con el nombre de los todos los clientes españoles.</marquee></p>
                </div>
            </summary>
            <div class="report__container">
            <my-card></my-card>
            </div>
            </details> 
        `
    }
    static get observedAttributes(){
        return ["Mydetails"]

    }
}
 
