import { createContext } from "react";
import { ThemeStateType } from "../types/ThemeStateType";

export const ThemeContext = createContext<ThemeStateType>({ theme: "light", setTheme: () => {} })