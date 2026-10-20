import { experience } from "./experience"

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"]

// "Feb 2018 — Nov 2018" → 1 Feb 2018
function startOf(period) {
  const [month, year] = period.split(" — ")[0].split(" ")
  const monthIndex = MONTHS.indexOf(month)
  if (monthIndex < 0 || !/^\d{4}$/.test(year)) throw new Error(`Unreadable period in experience.js: "${period}"`)
  return new Date(Number(year), monthIndex, 1)
}

// The first job's start date: the earliest period in experience.js.
export const careerStart = experience.map(role => startOf(role.period)).reduce((earliest, date) => (date < earliest ? date : earliest))

// Whole years from the first job to `now`. The site shows this as "N+" (or "N" in words),
// so the count goes up by itself each anniversary month.
export function yearsOfExperience(now = new Date()) {
  const years = now.getFullYear() - careerStart.getFullYear()
  return now.getMonth() < careerStart.getMonth() ? years - 1 : years
}

export const yearsInWords = years => WORDS[years] ?? String(years)
