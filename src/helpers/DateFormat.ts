import { DateTime } from "luxon";

function toFormat(date: string, format = "dd/MM/yyyy") {
  return DateTime.fromISO(date).toUTC().toFormat(format);
}

function isoToTimestamp(iso8601Date: string) {
  return DateTime.fromISO(iso8601Date).toMillis();
}

function secToDays(secs: number) {
  const segundosEmUmDia = 86400;
  return secs / segundosEmUmDia;
}

function timestampUntil(dateString: string) {
  const now = new Date();
  if (!dateString) return;
  const targetDate = new Date(dateString);
  const differenceInMilliseconds = targetDate.getTime() - now.getTime();
  return differenceInMilliseconds;
}

function timestampToDate(timestamp: number) {
  const sec = Math.floor((timestamp / 1000) % 60);
  const min = Math.floor((timestamp / (1000 * 60)) % 60);
  const hours = Math.floor((timestamp / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timestamp / (1000 * 60 * 60 * 24));

  return {
    days: days >= 0 ? days.toFixed() : 0,
    hours: hours >= 0 ? hours.toFixed() : 0,
    min: min >= 0 ? min.toFixed() : 0,
    sec: sec >= 0 ? sec.toFixed() : 0,
  };
}

function dateToTimestamp() {
  return Math.floor(new Date('2024-05-05').getTime() / 1000)
}

export const DateFormat = {
  toFormat,
  isoToTimestamp,
  secToDays,
  timestampUntil,
  timestampToDate,
  dateToTimestamp
};
