import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Context from './Components/ContextProvider/Context';
import AdminContext from './Components/ContextProvider/ContextAdmin';
import ContextStaff from './Components/ContextProvider/ContextStaff';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
  <ContextStaff>
  <AdminContext>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AdminContext>
  </ContextStaff>
  </Context>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
