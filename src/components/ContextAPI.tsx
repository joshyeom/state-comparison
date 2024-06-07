import { ThemeStateType } from "../types/ThemeStateType"
import { toggleTheme } from "../utils/toggleTheme"
import styles from "../public/App.module.css"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"

const ContextAPI = () => {
    const context = useContext<ThemeStateType>(ThemeContext)
    const { theme } = context

    return (
    <div className={`${theme === "light" ? styles.light : styles.dark} ${styles.container}`}>
        <header className={styles.header}>
          <h1>This page is for Context API page</h1>
          <button onClick={() => toggleTheme(context)}>
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

export default ContextAPI