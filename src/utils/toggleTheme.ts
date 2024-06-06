import { AppProps } from "../types/AppProps";

export const toggleTheme = ({theme, setTheme}: AppProps) => {
    if(theme === "light"){
      localStorage.setItem('theme', "dark")
      setTheme("dark");
    }else{
      localStorage.setItem('theme', "light")
      setTheme("light");
    }
};