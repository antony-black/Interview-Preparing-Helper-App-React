import useGlobal from "../../hooks/useGlobal";
import Button from "./button";
import styles from "./buttons.module.css";

export default function ButtonsContainer() {
  const { handleBackButton, handleNextButton } = useGlobal();

  return (
    <div className={styles.buttonContainer}>
      <Button onClick={handleBackButton}>BACK</Button>
      <Button onClick={handleNextButton}>NEXT</Button>
    </div>
  );
}
