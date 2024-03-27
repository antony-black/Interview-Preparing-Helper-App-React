import styles from "./questoin.module.css";

export default function Question({ round, showAnswer, setShowAnswer }) {
  const handleShowAnswer = () => {
    showAnswer ? setShowAnswer(false) : setShowAnswer(true);
  };
  return (
    <div className={styles.questionContainer}>
      <p>{round.question}</p>
      <span className={styles.showAnswer} onClick={handleShowAnswer}>
        show the answer
      </span>
    </div>
  );
}
