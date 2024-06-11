import { useEffect } from 'react';
import styles from '../../public/App.module.css'
import { Link } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { themeState } from '../../store/recoilStore/store';


const RecoilPage = () => {
    const setTheme = useSetRecoilState(themeState);
    const recoilValue = useRecoilValue(themeState)
    const { theme } = recoilValue

    const toggleTheme = (prevTheme: "light" | "dark") => {
      if(prevTheme === "light"){
        setTheme({theme: "dark"})
        localStorage.setItem("theme", "dark")
      }else{
        setTheme({theme: "light"})
        localStorage.setItem("theme", "light")
      }
    }


    useEffect(() => {
        const newTheme = localStorage.getItem("theme") === "dark" ? "dark" : "light"
        if(newTheme === null){
            return
        }
        setTheme({theme: newTheme})
    },[])

    return (
    <div className={`${theme === "light" ? styles.light : styles.dark} ${styles.container}`}>
        <header className={styles.header}>
          <h1>This page is for Recoil</h1>
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

export default RecoilPage