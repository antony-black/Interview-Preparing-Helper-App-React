import useGlobal from "../../hooks/useGlobal";
import styles from "./progressBar.module.css";

export default function ProgressBar() {
  const { progress } = useGlobal();

  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBarInner}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
