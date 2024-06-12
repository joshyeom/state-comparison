// StateManagementList.js
import styles from '../public/App.module.css'
import { Link } from 'react-router-dom'

const StateManagementList = () => {
    return(
        <main className={styles.main}>
        <p>
          Here you can compare different state management tools
        </p>
        <ol>
          <li>
            <Link to="/props">
                <button className={styles.buttonProps}>Props</button>
            </Link>
          </li>
          <li>
            <Link to="/contextapi">
                <button className={styles.buttonContextApi}>Context API</button>
            </Link>
          </li>
          <li>
          <Link to="/reduxtoolkit">
                <button className={styles.buttonReduxToolkit}>Redux Toolkit</button>
          </Link>
          </li>
          <li>
          <Link to="/zustand">
                <button className={styles.buttonZustand}>Zustand</button>
          </Link>
          </li>
          <li>
            <Link to="/recoil">
              <button className={styles.buttonRecoil}>Recoil</button>
            </Link>
          </li>
          <li>
            <Link to="/jotai">
                <button className={styles.buttonJotai}>Jotai</button>
            </Link>
          </li>
          <li>
            <Link to="/mobx">
                <button className={styles.buttonMobx}>MobX</button>
            </Link>
          </li>
          <li>
            <Link to="/valtio">
                <button className={styles.buttonValtio}>Valtio</button>
            </Link>
          </li>
        </ol>
      </main>
    )
}

export default StateManagementList
