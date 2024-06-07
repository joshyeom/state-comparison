import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  useState } from 'react';
import { App, ContextAPI, Props} from './components';
import { ThemeType } from './types/ThemeStateType';
import { ThemeContext } from './context/ThemeContext';

const Router = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const themeStorage = localStorage.getItem("theme");
    return themeStorage === "dark" ? "dark" : "light";
  });
  // useState를 콜백으로 넘겨서 theme상태를 지정하여 useEffect를 첫 렌더링에는 사용하지 않을 수 있음.
  // 이전에는 localStorage가 지정이 안되어있을 것을 대비해 null값을 타입 지정했지만 light와 dark만 지정해도 됨


    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<App theme={theme} setTheme={setTheme}/>}/>
              <Route path="/props" element={<Props theme={theme} setTheme={setTheme}/>}/>
              <Route path="/contextapi" element={<ContextAPI/>}/>
            </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    );
  };

export default Router