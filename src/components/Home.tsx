import { useState } from 'react';
import { ThemeType } from '../types/types';
import styles from "../public/App.module.css"
import StateManagementList from './StateMangementList';


const Home = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const themeStorage = localStorage.getItem("theme");
    return themeStorage === "dark" ? "dark" : "light";
  });



  const toggleTheme = () => {
    if(theme === "light"){
      localStorage.setItem('theme', "dark")
      setTheme("dark");
    }else{
      localStorage.setItem('theme', "light")
      setTheme("light");
    }
  };

  return (
    <div className={`${theme === "light" ? styles.light : styles.dark} ${styles.container}`}>
      <header className={styles.header}>
        <h1>State Management Comparison</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? 'Dark' : 'Light'} Mode
        </button>
      </header>
      <StateManagementList/>
    </div>
  );
};

export default Home;
