import React from "react";

/**
 * Result Bileşeni:
 * - Test sonunda genel istatistikleri hesaplar
 * - Her soru için detaylı analiz sunar
 * - ID tabanlı ve eski string tabanlı sistemlerle uyumludur
 */
const Result = ({ questions, answers }) => {
  let correct = 0;
  let wrong = 0;
  let empty = 0;

  // Genel istatistik hesaplama
  questions.forEach((q, i) => {
    if (answers[i] === null) {
      empty++;
    } else if (answers[i] === q.answer) {
      correct++;
    } else {
      wrong++;
    }
  });

  return (
    <div className="result-card">
      <h2>Sonuçlar</h2>

      {/* ÖZET */}
      <div className="stats-container">
        <p><strong>Doğru:</strong> {correct}</p>
        <p><strong>Yanlış:</strong> {wrong}</p>
        <p><strong>Boş:</strong> {empty}</p>
      </div>

      <hr />

      {/* DETAYLI RAPOR */}
      <div className="question-review">
        {questions.map((q, i) => {
          const userAnswer = answers[i];

          // Şıkları ID destekli çözümle
          const correctOption = q.options.find(o =>
            typeof o === "object"
              ? o.id === q.answer
              : o === q.answer
          );

          const userOption = q.options.find(o =>
            typeof o === "object"
              ? o.id === userAnswer
              : o === userAnswer
          );

          let status;
          if (userAnswer === null) status = "Boş";
          else if (userAnswer === q.answer) status = "Doğru";
          else status = "Yanlış";

          return (
            <div key={i} className="review-item">
              <p><strong>Soru {i + 1}:</strong> {q.question}</p>

              <p>
                <strong>Senin Cevabın:</strong>{" "}
                {userAnswer === null
                  ? "Boş"
                  : typeof userOption === "object"
                  ? `${userOption.id}) ${userOption.text}`
                  : userAnswer}
              </p>

              <p>
                <strong>Doğru Cevap:</strong>{" "}
                {typeof correctOption === "object"
                  ? `${correctOption.id}) ${correctOption.text}`
                  : q.answer}
              </p>

              <p><strong>Durum:</strong> {status}</p>
              <hr />
            </div>
          );
        })}
      </div>

      <button onClick={() => window.location.reload()}>
        Yeniden Başla
      </button>
    </div>
  );
};

export default Result;
