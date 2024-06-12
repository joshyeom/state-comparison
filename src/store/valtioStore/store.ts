import { proxy } from 'valtio';

const themeStore = proxy({
    theme: localStorage.getItem('theme') || 'light',
    setTheme(newTheme: "light" | "dark") {
        themeStore.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    },
    toggleTheme() {
        themeStore.setTheme(themeStore.theme === 'light' ? 'dark' : 'light');
    }
});

export default themeStore;