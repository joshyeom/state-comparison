export type ThemeType = "light" | "dark" | null

export interface ThemeStateType{
    theme: ThemeType;
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
 }