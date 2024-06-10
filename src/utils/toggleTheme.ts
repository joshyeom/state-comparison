import { ThemeStateType } from "../types/types";

export const toggleTheme = ({theme, setTheme}: ThemeStateType) => {
    if(theme === "light"){
      localStorage.setItem('theme', "dark")
      setTheme("dark");
    }else{
      localStorage.setItem('theme', "light")
      setTheme("light");
    }
};