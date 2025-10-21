import dayjs from "dayjs";

/**
 * Formats a date string to DD/MM/YYYY format
 * @param {string} date - Date string in YYYY-MM-DD format
 * @returns {string} Formatted date or empty string
 */
export const printDate = (date) => {
  if (/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(date)) {
    return dayjs(date).format("DD/MM/YYYY");
  }
  return '';
};
