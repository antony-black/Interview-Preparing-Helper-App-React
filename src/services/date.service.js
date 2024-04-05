import { Weekdays } from "../constants/weekDays";

export const DateService = {
  getDateData() {
    return new Date();
  },

  getWeekday() {
    const day = DateService.getDateData().getDay();
    const currentWeekday = Weekdays[day];
    return currentWeekday;
  },

  getCurrentDate() {
    const currentDate = `${DateService.getDateData().toLocaleDateString(
      "en-us",
      {
        month: "short",
      }
    )} ${DateService.getDateData().getDate()}, ${DateService.getWeekday()}`;

    return currentDate;
  },
};
