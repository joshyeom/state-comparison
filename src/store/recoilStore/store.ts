import { atom } from "recoil";

interface StatusType {
    theme: "light" | "dark";
}

export const themeState = atom<StatusType>({
    key: 'theme',
    default: {
        theme: "light"
    }
});