import React from "react";

/**
 * Intro Bileşeni: Testin başlangıç ekranını temsil eder.
 * @param {Function} onStart - 'Teste Başla' butonuna tıklandığında üst bileşende (App.jsx) 
 * testi başlatan fonksiyonu tetikler.
 */
const Intro = ({ onStart }) => (
  <div className="intro-card">
    {/* Uygulamanın ana başlığı */}
    <h1>Bilgi Testi</h1>
    
    {/* Kullanıcıya test kuralları hakkında kısa bilgilendirme */}
    <p>
      10 soruluk bu testte her soru için 30 saniyeniz vardır. 
      <br />
      İlk 4 saniye şıklar gizlidir.
    </p>
    
    {/* Testi başlatan buton; tıklandığında onStart prop'u çağrılır */}
    <button onClick={onStart}>Teste Başla</button>
  </div>
);

export default Intro;