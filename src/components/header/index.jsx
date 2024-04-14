import useGlobal from "../../hooks/useGlobal";
import Success from "../success";
import CurrentPeriod from "../date";
import User from "../user";
import Button from "../buttons/button";
import ThemeSwitcher from "../themeSwitcher";
import styles from "./header.module.css";

export default function Header() {
  const {
    navigate,
    setTheme,
    activeQuestion,
    setActiveQuestion,
    setInputValue,
    inputValue,
    theme,
    setLogIn,
  } = useGlobal();

  const handleLogout = () => {
    setLogIn(false);
    navigate("/login");
    setTheme("light");
    setActiveQuestion(0);
    setInputValue("");
    localStorage.setItem(
      `${inputValue.email}${inputValue.password}`,
      JSON.stringify({ currentTheme: theme, currentQuestion: activeQuestion })
    );
  };
  return (
    <nav className={`${styles.nav}`}>
      <User />
      <Success />
      <CurrentPeriod />
      <div className={styles.buttonContainer}>
        <Button style={styles.logout} onClick={handleLogout}>
          Log out
        </Button>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
