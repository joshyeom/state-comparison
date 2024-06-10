import { createSlice } from '@reduxjs/toolkit';

const initialTheme = "light"

const initialState = {// 초기상태
  theme: initialTheme
};


export const themeSlice = createSlice({
  name: 'theme', // 슬라이스의 이름
  initialState, // 초기 상태
  reducers: { // 리듀서 함수 
    reduxToggleTheme: state => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      state.theme = newTheme;
    },
    initState: state => {
      state.theme = localStorage.getItem("theme") || "light"
    }
  }
});

export const { reduxToggleTheme, initState } = themeSlice.actions;

export default themeSlice.reducer;
