import React from "react";
import { useState } from "react";
import Intro from "./components/Intro";
import Question from "./components/Question";
import Result from "./components/Result";
import { questions } from "./data/questions";
import "./App.css";

/**
 * App Bileşeni: Uygulamanın ana kapsayıcısıdır.
 * Uygulama akışını (Giriş -> Sorular -> Sonuç) ve veri akışını yönetir.
 */
function App() {
  /* status state'i uygulamanın o anki aşamasını belirler:
    - 'intro': Başlangıç ekranı
    - 'quiz': Soru-cevap aşaması
    - 'result': Test sonu rapor ekranı
  */
  const [status, setStatus] = useState('intro');

  /* answers state'i kullanıcının verdiği tüm cevapları bir dizi olarak saklar.
    Sonuç ekranında (Result) doğru/yanlış hesaplaması için kullanılır.
  */
  const [answers, setAnswers] = useState([]);

  return (
    <div className="container">
      {/* 1. GİRİŞ EKRANI: 
        status 'intro' ise gösterilir. onStart tetiklendiğinde durum 'quiz'e geçer.
      */}
      {status === 'intro' && <Intro onStart={() => setStatus('quiz')} />}

      {/* 2. SORU EKRANI: 
        status 'quiz' ise gösterilir. 
        onFinish tetiklendiğinde gelen cevaplar answers state'ine kaydedilir 
         ve ekran 'result' (sonuç) aşamasına geçirilir.
      */}
      {status === 'quiz' && (
        <Question
          questions={questions}
          onFinish={(a) => {
            setAnswers(a);
            setStatus('result');
          }}
        />
      )}

      {/* 3. SONUÇ EKRANI: 
        status 'result' ise gösterilir. 
        questions (sorular) ve answers (kullanıcı yanıtları) proplarını alarak rapor sunar.
      */}
      {status === 'result' && (
        <Result questions={questions} answers={answers} />
      )}
    </div>
  );
}

export default App;