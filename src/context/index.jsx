import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { InterviewData } from "../constants/interviewData";
import getProgress from "../services/progress.service";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const round = InterviewData[activeQuestion];
  const navigate = useNavigate();

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const progress = getProgress(activeQuestion, InterviewData?.length);

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
        toggleTheme,
        theme,
        inputValue,
        setInputValue,
        navigate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
