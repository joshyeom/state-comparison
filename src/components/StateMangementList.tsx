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
                <button>Props</button>
            </Link>
          </li>
          <li>
            <Link to="/contextapi">
                <button>Context API</button>
            </Link>
          </li>
          <li>
          <Link to="/reduxtoolkit">
                <button>Redux Toolkit</button>
          </Link>
          </li>
          <li>
          <Link to="/zustand">
                <button>Zustand</button>
          </Link>
          </li>
          <li>
            <Link to="/recoil">
              <button>Recoil</button>
            </Link>
          </li>
          <li>
            <Link to="/jotai">
                <button>Jotai</button>
            </Link>
          </li>
          <li>
            <Link to="/mobx">
                <button>MobX</button>
            </Link>
          </li>
          <li>
            <Link to="/valtio">
                <button>Valtio</button>
            </Link>
          </li>
          <li>
            <button>Tanstack-Query</button>
          </li>
        </ol>
      </main>
    )
}

export default StateManagementList