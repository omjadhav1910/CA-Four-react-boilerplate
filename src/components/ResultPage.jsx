// ResultPage.jsx

import React, { useState } from "react";
import "./ResultPage.css";

const ResultPage = ({ correctAnswers, totalQuestions }) => {
  const [darkMode, setDarkMode] = useState(false); // Define darkMode state

  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  const handleRestartGame = () => {
    // Redirect to Quiz.jsx (adjust the path accordingly)
    window.location.href = "/quiz";
  };

  const handleDarkModeClick = () => {
    // Handle dark mode toggle for ResultPage
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <>
    <div className={`result-container ${darkMode ? "dark-mode" : ""}`}>
      <h1>Quiz Result</h1>
      <p>{`You answered ${correctAnswers} out of ${totalQuestions} questions correctly.`}</p>
      <p>{`Your score: ${percentage}%`}</p>
      <button onClick={handleRestartGame}>Restart Game</button>

      {/* Dark mode button for ResultPage */}
       
    </div>
    <button id="dark-mode" onClick={handleDarkModeClick}>
        {darkMode ? "Light" : "Dark"}
      </button>
    </>
     
  );
};

export default ResultPage;
