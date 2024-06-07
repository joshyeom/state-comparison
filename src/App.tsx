import React, { useEffect } from 'react';
import styles from './App.module.css'
import StateManagementList from './StateMangementList';
import { ThemeStateType } from './types/ThemeStateType';


const App: React.FC<ThemeStateType> = ({theme, setTheme}) => {

  useEffect(() => {
    const modeValue = localStorage.getItem('theme')
    if(modeValue === "dark"){
      setTheme("dark")
    }
  })


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

export default App;
