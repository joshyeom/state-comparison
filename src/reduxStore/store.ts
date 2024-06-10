import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeSlice';

const initialTheme = "light"

const store = configureStore({
  reducer: {
    theme: themeSlice
  },
  preloadedState: {
    theme: { theme: initialTheme }
  }
});

store.subscribe(() => {
  console.log('changed!')
});

export default store;