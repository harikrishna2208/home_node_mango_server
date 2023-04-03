import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";

import relativeTime from "dayjs/plugin/relativeTime.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(relativeTime);

enum dateFormat {
  ddmmyyyy = "DD-MM-YYYY",
  yyyymmdd = "YYYY-MM-DD",
}

export const todayDate = (dateFormatType: keyof typeof dateFormat): string => {
  return dayjs().local().format(dateFormat[dateFormatType]);
};

export const formatDateToString = (date: Date) => {
  return dayjs(date).local().format("DD MMMM YYYY, HH:mm:ss");
};

export const currentMonthStartDate = () => {
  return dayjs().startOf("month").format();
};

export const sortDateWithTime = (dateArray: string[]): string[] => {
  return dateArray.sort((dateA, dateB) => {
    const date1 = dayjs(dateA, "DD-MM-YYYY");
    const date2 = dayjs(dateB, "DD-MM-YYYY");
    if (dayjs(date2) > dayjs(date1)) return -1;
    if (!(dayjs(date2) > dayjs(date1))) return 1;
    return 0;
  });
};

export const formatDate = (date: Date) => dayjs(date).format("DD-MM-YYYY");
