import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  useEffect, useState } from 'react';
import App from './App';
import Props from './Props';
import ContextAPI from './ContextAPI';
import { ThemeType } from './types/ThemeStateType';
// import { ThemeContext } from './context/ThemeContext';

const Router = () => {
  const [theme, setTheme] = useState<ThemeType>("light")
  
  
  useEffect(() => {
    const themeStorage = localStorage.getItem("theme")
    if(themeStorage === "dark"){
      setTheme(themeStorage)
    }else{
      setTheme("light")
    }
  },[theme])



    return (
      // <ThemeContext.Provider value={{theme, setTheme}}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<App theme={theme} setTheme={setTheme}/>}/>
              <Route path="/props" element={<Props theme={theme} setTheme={setTheme}/>}/>
              <Route path="/contextapi" element={<ContextAPI/>}/>
            </Routes>
        </BrowserRouter>
      // </ThemeContext.Provider>
    );
  };

export default Router