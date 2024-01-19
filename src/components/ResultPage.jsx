import React from "react";
import "./ResultPage.css";

const ResultPage = () => {
  const handleRestartGame = () => {
    // Redirect to Quiz.jsx (adjust the path accordingly)
    window.location.href = "/quiz";
  };

  return (
    <div className="result-container">
      <h1>Quiz Result</h1>
      <p>You answered 3 out of 5 questions correctly.</p>
      <p>Your score: 60%</p>
      <button onClick={handleRestartGame}>Restart Game</button>
    </div>
  );
};

export default ResultPage;
