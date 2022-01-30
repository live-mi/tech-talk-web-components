// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Link } from 'react-router-dom';
import {UsingNativeWebComponents, UsingStencilWebComponents} from '../components';

export function App() {
  return (
    <>
      <div role="navigation">
        <ul className={styles['navigation-list']}>
          <li className={styles['navigation-list-item']}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles['navigation-list-item']}>
            <Link to="/native">Native</Link>
          </li>
          <li className={styles['navigation-list-item']}>
            <Link to="/stencil">Stencil</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/native"
        exact
        component={UsingNativeWebComponents}
      />
      <Route
        path="/stencil"
        exact
        component={UsingStencilWebComponents}
      />
    </>
  );
}

export default App;
