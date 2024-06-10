import { useEffect } from 'react';
import styles from '../../public/App.module.css'
import { useStore } from '../../store/zustandStore/store'
import { Link } from 'react-router-dom';

const Zustand= () => {
    const { theme, toggleTheme, initState } = useStore(state => ({ theme: state.theme, toggleTheme: state.toggleTheme, initState: state.initState }));

    useEffect(() => {
        initState()
    },[])


    return (
    <div className={`${theme === "light" ? styles.light : styles.dark} ${styles.container}`}>
        <header className={styles.header}>
          <h1>This page is for Zustand</h1>
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

export default Zustand