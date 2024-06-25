import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice
  }
});

store.subscribe(() => {
  console.log('changed!')
});

export default store;