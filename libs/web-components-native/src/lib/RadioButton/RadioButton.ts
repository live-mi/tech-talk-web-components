export class RadioButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('role', 'radio');
    this.setAttribute('tabindex', '-1');
    this.setAttribute('aria-checked', 'false');
    this.setAttribute('value', this.getAttribute('value') || '')
  }
}

window.customElements.define('radio-button', RadioButton);
