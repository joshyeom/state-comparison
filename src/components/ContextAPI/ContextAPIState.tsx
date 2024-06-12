import { ReactNode, useState } from "react";
import { ThemeType } from "../../types/types";
import { themeContext } from "./themeContext";


const ContextAPIState = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<ThemeType>(() => {
        const themeStorage = localStorage.getItem("theme");
        return themeStorage === "dark" ? "dark" : "light";
    });

    const toggleTheme = (): void => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme)
    };

    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    );
};

export default ContextAPIState;
