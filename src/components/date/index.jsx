import { useEffect, useState } from "react";
import { DateService } from "../../services/date.service";
import styles from "./date.module.css";

export default function CurrentPeriod() {
  const [currentDate, setCurrentDate] = useState(null);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    setCurrentDate(DateService.getCurrentDate());
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentTime(new Date().toLocaleTimeString()),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.dateContiner}>
      <span>{`Date: ${currentDate}`}</span>
      <span>{`Time: ${currentTime}`}</span>
    </div>
  );
}
