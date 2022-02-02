// @ts-nocheck
import { useRef, useLayoutEffect } from 'react';
import '@web-components/web-components-native';
import styles from './UsingNativeWebComponents.module.scss';


export const UsingNativeWebComponents = () => {
  const radioRef = useRef();

  const onChangeHandler = (customEvent: CustomEvent) => {
    console.log('onChangeHandler: customEvent', customEvent.detail);
  }

  useLayoutEffect(() => {
    radioRef.current.addEventListener('onChange', onChangeHandler);

    return () => {
      radioRef.current.removeEventListener('onChange', onChangeHandler);
    }
  }, [radioRef]);

  return (
   <>
     <h2>Native Web Components</h2>
     <div className={styles['radio-group-container']}>
       <radio-group selected="0" ref={radioRef}>
         <radio-button value="water">Water</radio-button>
         <radio-button value="coffee">Coffee</radio-button>
         <radio-button value="tea">Tea</radio-button>
         <radio-button value="cola">Cola</radio-button>
         <radio-button value="ginger_ale">Ginger Ale</radio-button>
       </radio-group>
     </div>
   </>
  );
}
