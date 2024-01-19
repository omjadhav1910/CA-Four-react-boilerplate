import React, { useState } from "react";
import "./Quiz.css";
import questionsData from "../assets/questions";
import ResultPage from "./ResultPage";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [highlight, setHighlight] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const question = questionsData[index];

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);

    if (question.options.find((option) => option.id === optionId)?.isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    if (index < questionsData.length - 1) {
      setIndex(index + 1);
      setSelectedOption(null);
    } else {
      setIndex(index + 1);
    }
  };

  const handleHighlightClick = () => {
    setHighlight(true);
  };

  const handleRemoveHighlightClick = () => {
    setHighlight(false);
  };

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
    // Toggle the "dark-mode" class on the body element
    document.body.classList.toggle("dark-mode");
  };

  if (index === questionsData.length) {
    return <ResultPage totalQuestions={questionsData.length} correctAnswers={correctAnswers} />;
  }

  return (
    <div className={`div ${darkMode ? "dark-mode" : ""}`}>
      <div>
        <h2 className={`quiz-title ${darkMode ? "white-text" : ""}`}>Kalvium</h2>
        <button id="dark-mode" onClick={handleDarkModeClick}>
          Dark
        </button>
      </div>
      <div className={`container ${highlight ? "highlighted" : ""}`}>
        <div className="index">{`${index + 1} of ${questionsData.length} questions`}</div>
        <hr />
        <h2 style={{ color: highlight ? "red" : (darkMode ? "white" : "blue") }}>
          {index + 1}. {question.text}
        </h2>
        <ul>
          {question.options.map((option) => (
            <li
              key={option.id}
              className={selectedOption === option.id ? "selected" : ""}
              onClick={() => handleOptionClick(option.id)}
            >
              {option.text}
            </li>
          ))}
        </ul>
        <div className="button-div">
          <button id="b1" onClick={handleHighlightClick}>
            Highlight
          </button>
          <button id="b2" onClick={handleRemoveHighlightClick}>
            Remove Highlight
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;