import { createContext, useState } from "react";
import { InterviewData } from "../constants/interviewData";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [user, setUser] = useState(null);
  const [serchValue, setSearchValue] = useState("");
  const round = InterviewData[activeQuestion];

  const getProgress = Math.round(
    ((activeQuestion + 1) / InterviewData?.length) * 100
  );

  const handleOnChange = () => {
    setUser(serchValue);
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
        getProgress,
        serchValue,
        setSearchValue,
        user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
