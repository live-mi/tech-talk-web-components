// @ts-nocheck
import styles from './UsingNativeWebComponents.module.scss';

export const UsingNativeWebComponents = () => {
  return (
    <div className={styles['radio-group-container']}>
      <radio-group selected="0">
        <radio-button>Water</radio-button>
        <radio-button>Coffee</radio-button>
        <radio-button>Tea</radio-button>
        <radio-button>Cola</radio-button>
        <radio-button>Ginger Ale</radio-button>
      </radio-group>
    </div>
  );
}
