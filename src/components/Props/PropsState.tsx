import Props from "./Props"
import { useState } from "react";
import { ThemeType } from "../../types/types";



const PropsState = () => {
    const [theme, setTheme] = useState<ThemeType>(() => {
        const themeStorage = localStorage.getItem("theme");
        return themeStorage === "dark" ? "dark" : "light";
      });

    return <Props theme={theme} setTheme={setTheme}/>
}

export default PropsState