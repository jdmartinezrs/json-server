export class Mydetails extends HTMLElement{
    marquee
    mycard
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.innerHTML = /*html*/`
        <link rel="stylesheet" href="../css/myDetails.css">
            <details id="queryAboutTable7">
            <summary>
                <div class="details__description">Campus: </div>
                <div class="details__container">
                    <p><marquee behavior="" direction=""></marquee></p>
                </div>
            </summary>
            <div class="report__container">
            <my-card></my-card>
            </div>
            </details> 
        `;
        this.marquee = this.shadowRoot.querySelector("marquee");
        this.myCard = this.shadowRoot.querySelector("my-card");
       
    }
    static get observedAttributes(){
        return ["logic","query"]

    }
    attributeChangedCallback(name,old,now){
        if (name == "logic") this.myCard.setAttribute("query",now)
        if (name == "query") this.marquee.innerHTML= now
    }

}

 
