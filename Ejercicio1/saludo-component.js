

class customHello extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <h1>Hola este es un componente simple</h1>
 
    `;

   }
   
}

customElements.define('saludo-componente', customHello);



