import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Logo from './components/Logo';
import Calculations from './components/Calculations';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Logo />
    <Calculations />
    <Footer />
  </React.StrictMode>
);

