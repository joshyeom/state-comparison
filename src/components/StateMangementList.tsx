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
            <button>Redux</button>
          </li>
          <li>
            <button>Zustand</button>
          </li>
          <li>
            <button>Recoil</button>
          </li>
          <li>
            <button>Jotai</button>
          </li>
          <li>
            <button>MobX</button>
          </li>
          <li>
            <button>Valtio</button>
          </li>
          <li>
            <button>Tanstack-Query</button>
          </li>
        </ol>
      </main>
    )
}

export default StateManagementList