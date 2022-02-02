import { Component, Event, EventEmitter, h, Listen, Prop, State } from "@stencil/core";
import { RadioButton } from "./types";

@Component({
  tag: 'ui-radio-group',
  styleUrl: 'ui-radio-group.scss',
  shadow: true,
})
export class UiRadioGroup {
  /**
   * Radio group name
   */
  @Prop() name: string;

  /**
   * Radio button items
   */
  @Prop() items: RadioButton[];

  @State() selected: string;

  @Event() changeValue: EventEmitter<unknown>;

  @Listen('changeValue')
  listenSelectedChanged(event: CustomEvent) {
    console.log('UiRadioGroup: listenSelectedChanged: ', event.detail);
  }

  connectedCallback() {
    console.log('UiRadioGroup: connectedCallback');
  }
  componentWillLoad() {
    console.log('UiRadioGroup: componentWillLoad');
  }

  render() {
    return (
      <div class="radio-group-container">
        {this.items.map((button) => (
          <ui-radio-button
            id={button.id}
            name={this.name}
            value={button.value}
            isChecked={button.isChecked || false}
            onChangeRadio={(event: CustomEvent) => {
              this.changeValue.emit(event.detail);
              this.selected = event.detail.value;
            }}
          >
            {button.label}
          </ui-radio-button>
        ))}
        <div>{this.selected}</div>
      </div>
    );
  }
}


