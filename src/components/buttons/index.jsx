import useGlobal from "../../hooks/useGlobal";
import Button from "./button";
import styles from "./buttons.module.css";
import btnStyles from "./button/button.module.css";

export default function ButtonsContainer() {
  const { handleBackButton, handleNextButton } = useGlobal();

  return (
    <div className={styles.buttonContainer}>
      <Button style={btnStyles.btn} onClick={handleBackButton}>
        BACK
      </Button>
      <Button style={btnStyles.btn} onClick={handleNextButton}>
        NEXT
      </Button>
    </div>
  );
}
