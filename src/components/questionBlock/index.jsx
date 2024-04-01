import { useState } from "react";
import useGlobal from "../../hooks/useGlobal";
import Question from "./question";
import Answer from "./answer";
import styles from "./questionBlock.module.css";

export default function QuestionBlock() {
  const [showAnswer, setShowAnswer] = useState(false);
  const { round } = useGlobal();

  return (
    <div className={styles.mainContainer}>
      <Question
        round={round}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
      />
      <Answer round={round} showAnswer={showAnswer} />
    </div>
  );
}
