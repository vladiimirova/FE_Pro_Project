import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Уточнение типа для `getElementById`
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Если вы хотите измерять производительность, передайте функцию для обработки данных
// например: reportWebVitals(console.log)
// Подробнее: https://bit.ly/CRA-vitals
reportWebVitals();
