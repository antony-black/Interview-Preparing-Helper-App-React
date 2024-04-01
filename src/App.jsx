import React from "react";
import ProgressBar from "./components/progressBar";
import Header from "./components/header";
import QuestionBlock from "./components/questionBlock";
import ButtonsContainer from "./components/buttons";
import Auth from "./components/auth";
import useGlobal from "./hooks/useGlobal";
import styles from "./App.module.css";

function App() {
  const { user, setUser } = useGlobal();
  return (
    // <div className={styles.mainContainer}>
    //   {!!user ? (
    //     <>
    //       <h2>Welcome, {user.name}</h2>
    //       <button onClick={() => setUser(null)}>Logout</button>
    //     </>
    //   ) : (
    //     <button onClick={() => setUser("Max")}>Login</button>
    //   )}
    // </div>
    <div className={styles.mainContainer}>
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
