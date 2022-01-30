import {Keyboard} from './const';
import './styles.css'

export class RadioGroup extends HTMLElement {
  radioButtons: HTMLElement[] = [];
  _selected!: number;

  constructor() {
    super();
    this.handleKeyDown =  this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  connectedCallback() {
    console.log('RadioGroup: connectedCallback', { selected: this.selectedValue, hasSelectedAttribute: this.hasAttribute('selected') });
    this.setAttribute('role', 'radiogroup');
    this.radioButtons = Array.from(this.querySelectorAll('radio-button'));

    // Setup initial state
    if (this.hasAttribute('selected')) {
      const selected: number = this.selectedValue;
      this._selected = selected;
      if (selected >= 0) {
        setTimeout(() => {
          this.selectRadioButton(selected);
        })
      }
    } else {
      this._selected = 0;
      this.radioButtons[0].setAttribute('tabindex', String(0));
    }

    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    console.log('RadioGroup: disconnectedCallback');
    this.removeEventListener('keydown', this.handleKeyDown);
    this.removeEventListener('click', this.handleClick);
  }

  adoptedCallback() {
    console.log('RadioGroup: adoptedCallback', this);
  }

  handleKeyDown(event: KeyboardEvent) {
    switch(event.code) {
      case Keyboard.ArrowUp:
      case Keyboard.ArrowLeft: {
        event.preventDefault();

        if (this.selected === 0) {
          this.selected = this.radioButtons.length - 1;
        } else {
          this.selected -= 1;
        }
        break;
      }

      case Keyboard.ArrowDown:
      case Keyboard.ArrowRight: {
        event.preventDefault();
        if (this.selected === this.radioButtons.length - 1) {
          this.selected = 0;
        } else {
          this.selected += 1;
        }
        break;
      }
    }
  }

  handleClick(event: MouseEvent) {
    const index = this.radioButtons.indexOf(event.target as HTMLElement);
    if (index !== -1) {
      this.selected = index;
    }
  }

  set selected(index: number) {
    if (isFinite(this.selected)) {
      // Set the old button to tabindex -1
      let previousSelected = this.radioButtons[this.selected];
      previousSelected.tabIndex = -1;
      previousSelected.removeAttribute('aria-checked');
    }

    // Set the new button to tabindex 0 and focus it
    let newSelected = this.radioButtons[index];
    newSelected.tabIndex = 0;
    newSelected.focus();
    newSelected.setAttribute('aria-checked', String(true));

    this.setAttribute('selected', String(index));
    this._selected = index;
  }

  get selected() {
    return this._selected;
  }

  get selectedValue(): number {
    const value = Number(this.getAttribute('selected'));
    return !isNaN(value) ? value : -1;
  }

  set selectedValue(newValue: number) {
    this.setAttribute('selected', String(newValue));
  }

  selectRadioButton(index: number): void {
    this.radioButtons[index].setAttribute('tabindex', String(0));
    this.radioButtons[index].setAttribute('aria-checked', String(true));
  }
}

window.customElements.define('radio-group', RadioGroup);
