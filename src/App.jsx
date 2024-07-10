// import { useState } from 'react'
import React, { useState, useEffect } from "react";
import "./App.css";
import shuffleArray from "../helpers/shuffleArray.js";
import questions from "../data/questions.js";
import CustomButton from "../components/CustomButton.jsx";

const shuffledQuestions = shuffleArray([...questions]).slice(0, 10);

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setSelectedOption("");
  }, [currentQuestionIndex]);

  function handleClick(option) {
    setSelectedOption(option);
  }

  const handleNextQuestion = () => {
    if (selectedOption === shuffledQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const handlePrevQuestion = () => {
    const prevQuestionIndex = currentQuestionIndex - 1;
    if (prevQuestionIndex >= 0) {
      setCurrentQuestionIndex(prevQuestionIndex);
      setScore(prevState.score);
    }
  };

  return (
    <div className="App">
      <h1>My Bond Trivia Game</h1>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {shuffledQuestions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestionIndex + 1}</span>/
              {shuffledQuestions.length}
            </div>
            <div className="question-text">
              {shuffledQuestions[currentQuestionIndex].question}
            </div>
          </div>

          <div className="button-container">
            {shuffledQuestions[currentQuestionIndex].options.map((option) => (
              <CustomButton
                key={option}
                onClick={() => handleClick(option)}
                className={selectedOption === option ? "selected" : ""}
              >
                {option}
              </CustomButton>
            ))}
          </div>

          <div className="navigation-buttons">
            <CustomButton
              onClick={handlePrevQuestion}
              className="prev-button"
              disabled={currentQuestionIndex === 0}
            >
              Prev Question
            </CustomButton>
            <CustomButton
              onClick={handleNextQuestion}
              className="next-button"
              disabled={!selectedOption}
            >
              Next Question
            </CustomButton>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
