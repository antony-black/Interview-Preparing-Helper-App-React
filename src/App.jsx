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
    </div>
  );
}

export default App;
