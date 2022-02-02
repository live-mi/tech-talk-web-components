import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'ui-radio-button',
  styleUrl: 'ui-radio-button.scss',
  shadow: false,
})
export class UiRadioButton {
  /**
   * Radiobutton ID
   */
  @Prop() id: string;

  /**
   * Radiobutton name
   */
  @Prop() name: string;

  /**
   * Radiobutton value
   */
  @Prop() value: string;

  /**
   * Radiobutton value
   */
  @Prop({ mutable: true }) isChecked?: boolean;

  /**
   * Radiobutton label
   */
  @Prop() label?: string;

  @Event() changeRadio: EventEmitter<unknown>;

  render() {
    return (
      <div class="radio-button-container">
        <input
          type="radio"
          id={this.id}
          name={this.name}
          value={this.value}
          checked={this.isChecked}
          aria-checked={this.isChecked || false}
          onChange={(event: Event) => {
            const { checked, name, value } = event.target as HTMLInputElement;
            this.changeRadio.emit({ checked, name, value });
          }}
        />
        <label htmlFor={this.id}>
          <slot />
        </label>
      </div>
    );
  }
}

