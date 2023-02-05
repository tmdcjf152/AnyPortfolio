import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/reset.css'
import './styles/common.css'
import MainPage from './pages/MainPage';
import { RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from 'recoil';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);

