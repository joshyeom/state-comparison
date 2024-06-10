import styles from "../../public/App.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "./themeContext";

const ContextAPI = () => {
    const { theme, toggleTheme } = useContext(themeContext);

    return (
        <div className={`${theme === "light" ? styles.light : styles.dark} ${styles.container}`}>
            <header className={styles.header}>
                <h1>This page is for Context API</h1>
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
    );
};

export default ContextAPI;
