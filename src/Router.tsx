import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import App from './App';
import Props from './Props';
import ContextAPI from './ContextAPI';

const Router = () => {
  const [theme, setTheme] = useState<string>('light')

    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App theme={theme} setTheme={setTheme}/>}/>
            <Route path="/props" element={<Props theme={theme} setTheme={setTheme}/>}/>
            <Route path="/contextapi" element={<ContextAPI/>}/>
          </Routes>
      </BrowserRouter>
    );
  };

export default Router