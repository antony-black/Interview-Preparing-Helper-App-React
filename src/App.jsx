import React from "react";
import ProgressBar from "./components/progressBar";
import Header from "./components/header";
import QuestionBlock from "./components/questionBlock";
import ButtonsContainer from "./components/buttons";
import Auth from "./components/auth";
import useGlobal from "./hooks/useGlobal";
import styles from "./App.module.css";

function App() {
  const { user, theme } = useGlobal();

  const getStyles = () => {
    return theme === "dark"
      ? `${styles.mainContainer} ${styles.mainContainerDark}`
      : `${styles.mainContainer}`;
  };

  return (
    <div className={getStyles()}>
      {!!user ? (
        <>
          <Header />
          <ProgressBar />
          <QuestionBlock />
          <ButtonsContainer />
        </>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
