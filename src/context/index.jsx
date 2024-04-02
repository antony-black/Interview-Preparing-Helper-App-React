import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { InterviewData } from "../constants/interviewData";
import getProgress from "../services/progress.service";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [user, setUser] = useState(null);
  const [serchValue, setSearchValue] = useState("");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const round = InterviewData[activeQuestion];

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const progress = getProgress(activeQuestion, InterviewData?.length);

  const handleLogIn = (e) => {
    e.preventDefault();
    if (!!serchValue) {
      setUser(serchValue);
      setSearchValue("");
    }
  };

  const handleLogOut = () => {
    setUser(null);
  };

  const handleNextButton = () => {
    activeQuestion < InterviewData.length - 1
      ? setActiveQuestion(activeQuestion + 1)
      : setActiveQuestion(0);
  };

  const handleBackButton = () => {
    activeQuestion > 0
      ? setActiveQuestion((prev) => prev - 1)
      : setActiveQuestion(InterviewData.length - 1);
  };
  return (
    <GlobalContext.Provider
      value={{
        InterviewData,
        activeQuestion,
        setActiveQuestion,
        round,
        handleNextButton,
        handleBackButton,
        progress,
        serchValue,
        setSearchValue,
        user,
        setUser,
        handleLogIn,
        handleLogOut,
        toggleTheme,
        theme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
