import React from "react";
import useGlobal from "../../hooks/useGlobal";
import Button from "../buttons/button";
import styles from "./themeSwitcher.module.css";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useGlobal();

  const getStyles = () => {
    return theme === "dark"
      ? `${styles.switcher} ${styles.switcherDark}`
      : `${styles.switcher}`;
  };

  return (
    <div>
      <Button style={getStyles()} onClick={toggleTheme}>
        SWITCH THEME
      </Button>
    </div>
  );
}
