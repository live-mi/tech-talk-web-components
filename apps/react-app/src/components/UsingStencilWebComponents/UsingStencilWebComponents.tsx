import { UiRadioGroup } from '@web-components/web-components-react';
import styles from './UsingStencilWebComponents.module.scss';
import { useState } from "react";

type RadioButtonItem = {
  id: string
  value: string
  label: string
  isChecked?: boolean
}

const items: RadioButtonItem[] = [
  { id: 'water', value: 'water', isChecked: true, label: 'Water' },
  { id: 'coffee', value: 'coffee', label: 'Coffee' },
  { id: 'tea', value: 'tea', label: 'Tea' },
  { id: 'cola', value: 'cola', label: 'Cola' },
  { id: 'ginger_ale', value: 'ginger_ale', label: 'Ginger Ale' },
];

export const UsingStencilWebComponents = () => {
  const [radioGroupValue, setRadioGroupValue] = useState(() => items[0].value)

  const onChangeValue = (event: CustomEvent) => {
    setRadioGroupValue(event.detail.value);
    console.log('onChangeValue: checked', event.detail);
  }

  return (
    <div className={styles['root']}>
      <h2>Stencil Web Components</h2>
      <div className={styles['radio-group-container']}>
        <UiRadioGroup name={'radio-group'} items={items} onChangeValue={onChangeValue} />
      </div>

      <div className={styles['radio-group-value']}>
        <h4>{radioGroupValue}</h4>
      </div>
    </div>
  );
}
