import useGlobal from "../../hooks/useGlobal";
import Success from "../success";
import CurrentPeriod from "../date";
import User from "../user";
import Button from "../buttons/button";
import ThemeSwitcher from "../themeSwitcher";
import styles from "./header.module.css";

export default function Header() {
  const { handleLogOut } = useGlobal();
  return (
    <nav className={`${styles.nav}`}>
      <User />
      <Success />
      <CurrentPeriod />
      <div className={styles.buttonContainer}>
        <Button style={styles.logout} onClick={handleLogOut}>
          Log out
        </Button>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
