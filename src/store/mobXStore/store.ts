import { makeAutoObservable } from 'mobx';

const createThemeStore = () => {
    const theme = localStorage.getItem('theme') || 'light';

    const store = {
        theme,
        setTheme(newTheme: "light" | "dark") {
            store.theme = newTheme;
            localStorage.setItem('theme', newTheme);
        },
        toggleTheme() {
            store.setTheme(store.theme === 'light' ? 'dark' : 'light');
        }
    };

    makeAutoObservable(store);
    return store;
};

const themeStore = createThemeStore();
export default themeStore;
