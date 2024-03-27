import React from "react";
import { useState } from "react";
import styles from "./App.module.css";
import Question from "./components/question";
import Answer from "./components/answer";
import { InterviewData } from "./constants/interviewData";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const round = InterviewData[activeQuestion];

  const handleNextButton = () => {
    activeQuestion < InterviewData.length - 1
      ? setActiveQuestion(activeQuestion + 1)
      : setActiveQuestion(0);
  };

  const handleBackButton = () => {
    activeQuestion > 0
      ? setActiveQuestion((prev) => prev - 1)
      : setActiveQuestion(InterviewData.length - 1);
  };
  return (
    <div className={styles.mainContainer}>
      <Question
        activeQuestion={activeQuestion}
        round={round}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
      />
      <Answer
        activeQuestion={activeQuestion}
        round={round}
        showAnswer={showAnswer}
      />
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={handleBackButton}>
          BACK
        </button>
        <button className={styles.btn} onClick={handleNextButton}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default App;
