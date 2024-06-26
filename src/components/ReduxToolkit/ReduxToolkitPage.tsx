import styles from "../../public/App.module.css"
import { Link } from "react-router-dom"
import { initState, reduxToggleTheme } from "../../store/reduxStore/themeSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { rootStateType } from "../../types/rootStateType"

const ReduxToolkitPage = () => {
  const { theme } = useSelector((state: rootStateType) => state.theme)
  const dispatch = useDispatch()  

  useEffect(() => {
    dispatch(initState())
  },[])

    return (
    <div className={`${theme === "light" ? styles.light : styles.dark} ${styles.container}`}>
        <header className={styles.header}>
          <h1>This page is for Redux Toolkit</h1>
          <button onClick={() => dispatch(reduxToggleTheme())}>
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

export default ReduxToolkitPage