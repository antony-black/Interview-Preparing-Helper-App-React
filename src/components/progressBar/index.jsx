import useGlobal from "../../hooks/useGlobal";
import styles from "./progressBar.module.css";

export default function ProgressBar() {
  const { getProgress } = useGlobal();

  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBarInner}
        style={{ width: `${getProgress}%` }}
      ></div>
    </div>
  );
}
