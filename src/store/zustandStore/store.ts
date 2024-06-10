import { create } from "zustand";

interface types{
    theme: "light" | "dark"
}

export const useStore = create<types>((set) => ({
    theme: "light",
    toggleTheme: () => {
        set((state) => {
            const newTheme = state.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return { theme: newTheme };
        });
    },
    initState: () => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme !== null) {
            set({ theme: storedTheme as "light" | "dark"});
        }
    },
}));
