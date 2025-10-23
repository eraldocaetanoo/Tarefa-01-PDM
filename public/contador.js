class Contador extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Valor inicial do contador (pode vir de atributo)
    this.count = parseInt(this.getAttribute('valor-inicial')) || 0;

    this.shadowRoot.innerHTML = `
      <style>
        button {
          font-size: 16px;
          padding: 5px 10px;
          margin: 0 5px;
        }
        span {
          font-weight: bold;
          margin: 0 10px;
        }
      </style>
      <div>
        <button id="diminuir">-</button>
        <span id="valor">${this.count}</span>
        <button id="aumentar">+</button>
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.getElementById('aumentar').addEventListener('click', () => {
      this.count++;
      this._update();
    });

    this.shadowRoot.getElementById('diminuir').addEventListener('click', () => {
      this.count--;
      this._update();
    });
  }

  _update() {
    this.shadowRoot.getElementById('valor').textContent = this.count;
  }
}

// Define o elemento customizado
customElements.define('meu-contador', Contador);
