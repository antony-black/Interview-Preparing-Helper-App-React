import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { InterviewData } from "../constants/interviewData";
import { ProgressService } from "../services/progress.service";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [logIn, setLogIn] = useLocalStorage("logg", false);
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

  useEffect(() => {
    setProgress(
      ProgressService.getProgress(activeQuestion, InterviewData?.length)
    );
  }, [activeQuestion]);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
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
        toggleTheme,
        theme,
        setTheme,
        inputValue,
        setInputValue,
        navigate,
        handleChange,
        logIn,
        setLogIn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
