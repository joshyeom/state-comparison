import { ThemeStateType } from "../../types/types"
import styles from "../../public/App.module.css"
import { Link } from "react-router-dom"

const PropsPage:React.FC<ThemeStateType> = (props) => {
    const { theme, setTheme } = props

    const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light"
      setTheme(newTheme)
      localStorage.setItem("theme", newTheme)
    }


    return (
    <div className={`${theme === "light" ? styles.light : styles.dark} ${styles.container}`}>
        <header className={styles.header}>
          <h1>This page is for Props</h1>
          <button onClick={toggleTheme}>
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

export default PropsPage