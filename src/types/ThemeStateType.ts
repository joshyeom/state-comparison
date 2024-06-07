export type ThemeType = "light" | "dark"

export interface ThemeStateType{
    theme: ThemeType;
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
 }