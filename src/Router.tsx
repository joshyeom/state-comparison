import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, PropsStatePage, ContextAPIStatePage, ReduxToolkitStatePage, ZustandStatePage } from './components/index';
import ContextAPI from './components/ContextAPI/ContextAPI';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/props" element={<PropsStatePage/>}/>
              <Route path="/contextapi" element={
                <ContextAPIStatePage>
                  <ContextAPI/>
                </ContextAPIStatePage>
              }/>
              <Route path="/reduxtoolkit" element={<ReduxToolkitStatePage/>}/>
              <Route path="/zustand" element={<ZustandStatePage/>}/>
            </Routes>
        </BrowserRouter>
    );
  };

export default Router