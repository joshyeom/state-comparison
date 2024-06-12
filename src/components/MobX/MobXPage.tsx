import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import themeStore from '../../store/mobXStore/store';
import styles from '../../public/App.module.css'
import { observer } from 'mobx-react';

const MobXPage = observer(() => {
    const { theme, toggleTheme, setTheme } = themeStore


    useEffect(() => {
        const newTheme = localStorage.getItem("theme") === "dark" ? "dark" : "light"
        if(newTheme === null){
            return
        }
        setTheme(newTheme)
    },[theme])


    return (
    <div className={`${theme === "light" ? styles.light : styles.dark} ${styles.container}`}>
        <header className={styles.header}>
          <h1>This page is for MobX</h1>
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
})

export default MobXPage