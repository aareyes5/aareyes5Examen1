class Botonnew extends HTMLElement {
    constructor() {
        super();

        // Adjunta el shadow DOM
        this.attachShadow({ mode: 'open' });

        // Crea la imagen dentro del shadow DOM
        this.shadowRoot.innerHTML = ` 

            <style>
                 
            </style>
            <button  id="miBoton">Enviar mensaje</button>
        `;
        
         this.shadowRoot.getElementById('miBoton').addEventListener('click', this.ejecutar.bind(this));


    }

    ejecutar() {
        var boton = this.shadowRoot.getElementById('miBoton');
         

        this.dispatchEvent(new CustomEvent('cambio-texto'));

    }
}

// Define el nuevo elemento personalizado
customElements.define('emisor-component', Botonnew);

class TextChange extends HTMLElement {
    constructor() {
        super();

        // Adjunta el shadow DOM
        this.attachShadow({ mode: 'open' });

        // Crea la imagen dentro del shadow DOM
        this.shadowRoot.innerHTML = `
            <style>
                #miDiv {
                    font-size: 24px;
                    margin: 20px;
                }
            </style>
            <div id="miDiv">Mensaje defoult</div>
        `;


    }
    cambiarTexto() {
        var div = this.shadowRoot.getElementById("miDiv");
    
         div.innerHTML = "Mensage recivido.";
     
      }

}

// Define el nuevo elemento personalizado
customElements.define('receptor-component', TextChange);
