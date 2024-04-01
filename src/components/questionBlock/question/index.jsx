import styles from "./questoin.module.css";

export default function Question({ round, showAnswer, setShowAnswer }) {
  const handleShowAnswer = () => {
    showAnswer ? setShowAnswer(false) : setShowAnswer(true);
  };
  return (
    <div className={styles.questionContainer}>
      <p>
        <span>{round.id + 1}.</span> <span>{round.question}</span>
      </p>
      <span className={styles.showAnswer} onClick={handleShowAnswer}>
        {showAnswer ? "hide the answer" : "show the answer"}
      </span>
    </div>
  );
}
