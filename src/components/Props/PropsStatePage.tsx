import PropsPage from "./PropsPage"
import { useState } from "react";
import { ThemeType } from "../../types/types";



const PropsStatePage = () => {
    const [theme, setTheme] = useState<ThemeType>(() => {
        const themeStorage = localStorage.getItem("theme");
        return themeStorage === "dark" ? "dark" : "light";
      });

    return <PropsPage theme={theme} setTheme={setTheme}/>
}

export default PropsStatePage