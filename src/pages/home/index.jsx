import React from "react";
import ProgressBar from "../../components/progressBar";
import Header from "../../components/header";
import QuestionBlock from "../../components/questionBlock";
import ButtonsContainer from "../../components/buttons";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <ProgressBar />
      <QuestionBlock />
      <ButtonsContainer />
    </div>
  );
}
