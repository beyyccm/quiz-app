import React, { useEffect, useState, useRef } from "react";

const Question = ({ questions, onFinish }) => {
  // --- State Tanımlamaları ---
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(30);
  const [showOptions, setShowOptions] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [locked, setLocked] = useState(false);

  const intervalRef = useRef(null);
  const q = questions[index];

  // ⏱ TIMER
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [index]);

  // ⏰ SÜRE BİTİNCE
  useEffect(() => {
    if (timer === 0 && !locked) {
      handleNext(null);
    }
  }, [timer]);

  // 🔁 SORU RESET
  useEffect(() => {
    setTimer(30);
    setShowOptions(false);
    setLocked(false);

    const optTimer = setTimeout(() => {
      setShowOptions(true);
    }, 4000);

    return () => clearTimeout(optTimer);
  }, [index]);

  /**
   * Bir sonraki soruya geçiş
   * @param {string|null} answer - Şık ID (A,B,C,...) veya null
   */
  const handleNext = (answer) => {
    if (locked) return;
    setLocked(true);

    clearInterval(intervalRef.current);

    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (index < questions.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        onFinish(newAnswers);
      }
    }, 300);
  };

  return (
    <div className="quiz-card">
      <div
        className="timer-bar"
        style={{ width: `${(timer / 30) * 100}%` }}
      />
      <p>Kalan süre: {timer}s</p>

      <img
        src={`/assets/${q.media}`}
        alt="Soru görseli"
        className="question-img"
      />

      <h3>{index + 1}. {q.question}</h3>

      {/* ŞIKLAR – ID DESTEKLİ */}
      <div className={showOptions ? "options-container" : "hidden"}>
        {q.options.map((o, i) => {
          // GERİYE UYUMLULUK:
          // Eğer şık obje ise {id, text}
          // Eğer string ise eski sistem
          const optionId = typeof o === "object" ? o.id : o;
          const optionText = typeof o === "object" ? o.text : o;

          return (
            <button
              key={optionId}
              disabled={locked}
              onClick={() => handleNext(optionId)}
            >
              {typeof o === "object" ? `${o.id}) ${o.text}` : o}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
