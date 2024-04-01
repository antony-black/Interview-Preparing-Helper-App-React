import Success from "../success";
import CurrentPeriod from "../date";
import User from "../user";
import styles from "./header.module.css";

export default function Header() {
  return (
    <nav className={`${styles.nav}`}>
      {/* <span>{`User name: Anton`}</span> */}
      <User />
      <Success />
      <CurrentPeriod />
      <div className={styles.loginContainer}>
        <span>log in</span>
        <span>/</span>
        <span>log out</span>
      </div>
    </nav>
  );
}
