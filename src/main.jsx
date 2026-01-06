
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ana uygulama bileşenini içe aktarır
import './App.css'; // Global stil dosyalarını projeye dahil eder

/**
 * React uygulamasının başlangıç noktası.
 * HTML tarafındaki 'root' id'sine sahip div içerisine React bileşen ağacını render eder.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  /* StrictMode: Geliştirme aşamasında olası hataları ve güvenli olmayan 
     yöntemleri tespit etmek için kullanılan yardımcı bir araçtır. */
  <React.StrictMode>
    {/* Uygulamanın en üst seviyedeki ana bileşeni */}
    <App />
  </React.StrictMode>
);