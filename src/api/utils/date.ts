import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";

import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(utc);
dayjs.extend(relativeTime);

enum dateFormat {
  "ddmmyyyy" = "DD-MM-YYYY",
  "yyyymmdd" = "YYYY-MM-DD",
}

export const todayDate = (dateFormatType: dateFormat): string => {
  return dayjs().local().format(dateFormat[dateFormatType]);
};

export const formatDateToString = (date: Date) => {
  return dayjs(date).local().format("DD MMMM YYYY, HH:mm:ss");
};

export const currentMonthStartDate = () => {
  return dayjs().startOf("month").format();
};

export const formatDate = (date: Date) => dayjs(date).format("DD-MM-YYYY");
