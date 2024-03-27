import styles from "./answer.module.css";

export default function Answer({ round, showAnswer }) {
  return (
    showAnswer && (
      <div className={styles.answerContainer}>
        <p>{round.answer}</p>
      </div>
    )
  );
}
