import { Weekdays } from "../constants/weekDays";

export const date = new Date();

export const getWeekday = () => {
  const day = date.getDay();
  const currentWeekday = Weekdays[day];
  return currentWeekday;
};

export const getCurrentDate = () => {
  const currentDate = `${date.toLocaleDateString("en-us", {
    month: "short",
  })} ${date.getDate()}, ${getWeekday()}`;

  return currentDate;
};
