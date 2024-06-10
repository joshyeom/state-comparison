import { createContext } from "react";
import { ContextAPIType } from "../../types/types";

export const themeContext = createContext<ContextAPIType>({
    theme: "light",
    toggleTheme: (theme) => {}
});