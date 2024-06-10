export type ThemeType = "light" | "dark"

export interface ThemeStateType{
    theme: ThemeType;
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
 }

export interface ContextAPIType{
    theme: ThemeType
    toggleTheme: (theme: ThemeType) => void;
}