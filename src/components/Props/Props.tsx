import { ThemeStateType } from "../../types/types"
import { toggleTheme } from "../../utils/toggleTheme"
import styles from "../../public/App.module.css"
import { Link } from "react-router-dom"

const Props:React.FC<ThemeStateType> = (props) => {
    const {theme} = props

    return (
    <div className={`${theme === "light" ? styles.light : styles.dark} ${styles.container}`}>
        <header className={styles.header}>
          <h1>This page is for Props</h1>
          <button onClick={() => toggleTheme(props)}>
            Switch to {theme === "light" ? 'Dark' : 'Light'} Mode
          </button>
        </header>
          <Link to="/">
            <button>
                Back to Main
            </button>
          </Link>
      </div>
    )
}

export default Props