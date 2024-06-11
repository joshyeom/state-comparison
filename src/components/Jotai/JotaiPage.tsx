import { useEffect } from 'react';
import styles from '../../public/App.module.css'
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { themeAtom } from '../../store/jotaiStore/store';

const JotaiPage = () => {
    const [theme, setTheme] = useAtom(themeAtom)


    const toggleTheme = (prevTheme: "light" | "dark") => {
      if(prevTheme === "light"){
        setTheme("dark")
        localStorage.setItem("theme", "dark")
      }else{
        setTheme("light")
        localStorage.setItem("theme", "light")
      }
    }


    useEffect(() => {
        const newTheme = localStorage.getItem("theme") === "dark" ? "dark" : "light"
        if(newTheme === null){
            return
        }
        setTheme(newTheme)
    },[setTheme])


    return (
    <div className={`${theme === "light" ? styles.light : styles.dark} ${styles.container}`}>
        <header className={styles.header}>
          <h1>This page is for Jotai</h1>
          <button onClick={() => toggleTheme(theme)}>
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

export default JotaiPage