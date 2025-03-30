import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export default function NumberGame() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateNumbers();
  }, []);

  function generateNumbers() {
    const n1 = Math.floor(Math.random() * 100);
    const n2 = Math.floor(Math.random() * 100);
    setNum1(n1);
    setNum2(n2);
  }

  async function saveScore(finalScore) {
    try {
      await addDoc(collection(db, "scores"), {
        score: finalScore,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error("Error al guardar la puntuación: ", error);
    }
  }

  function checkAnswer(selected, other) {
    if (selected > other) {
      setScore(score + 1);
      generateNumbers();
    } else {
      alert(`Juego terminado! Puntuación: ${score}`);
      saveScore(score);
      setScore(0);
      generateNumbers();
    }
  }

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <h1 className="text-xl font-bold">Juego de Números</h1>
      <div className="flex space-x-4">
        <button
          className="p-4 bg-blue-500 text-white rounded-lg text-xl"
          onClick={() => checkAnswer(num1, num2)}
        >
          {num1}
        </button>
        <button
          className="p-4 bg-red-500 text-white rounded-lg text-xl"
          onClick={() => checkAnswer(num2, num1)}
        >
          {num2}
        </button>
      </div>
      <p className="text-lg">Puntuación: {score}</p>
    </div>
  );
}
