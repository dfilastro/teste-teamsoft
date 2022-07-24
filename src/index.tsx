import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../src/styles/global.css';
import { Header } from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);