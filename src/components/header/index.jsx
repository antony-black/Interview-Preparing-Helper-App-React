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
    setActiveQuestion,
    setInputValue,
    inputValue,
    user,
  } = useGlobal();

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
    setTheme("light");
    setActiveQuestion(0);
    setInputValue("");
    // const userData = JSON.parse(localStorage.getItem(inputValue.email));
    // console.log(userData);
    // localStorage.setItem(inputValue.email, JSON.stringify(inputValue));
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
