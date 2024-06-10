import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, PropsState, ContextAPIState, ReduxToolkitState, ZustandState } from './components/index';
import ContextAPI from './components/ContextAPI/ContextAPI';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/props" element={<PropsState/>}/>
              <Route path="/contextapi" element={
                <ContextAPIState>
                  <ContextAPI/>
                </ContextAPIState>
              }/>
              <Route path="/reduxtoolkit" element={<ReduxToolkitState/>}/>
              <Route path="/zustand" element={<ZustandState/>}/>
            </Routes>
        </BrowserRouter>
    );
  };

export default Router