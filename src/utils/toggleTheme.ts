import { ThemeStateType } from "../types/ThemeStateType";

export const toggleTheme = ({theme, setTheme}: ThemeStateType) => {
    if(theme === "light"){
      localStorage.setItem('theme', "dark")
      setTheme("dark");
    }else{
      localStorage.setItem('theme', "light")
      setTheme("light");
    }
};