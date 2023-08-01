export {
  addDay,
  checkLeapYear,
  monthDays,
  numOfDays,
  numOfMonths,
  numOfYears,
  sleep,
}

//Add days return string YYYY-MM-DD format
/*-------------------------------------------------------------------------------------------------
There appears to be a bug where the certain dates will not increment by 1, but rather n-1 for
values where n > 0.  For these dates a date check is executed check for this anomoly and if true
increment by n+1.
-------------------------------------------------------------------------------------------------*/
function addDay(date, days) {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + days)
  const checkDate = newDate.toISOString().substring(0, 10)
  if (checkDate === date) {
    newDate.setDate(newDate.getDate() + days + 1)
    return newDate.toISOString().substring(0, 10)
  } else {
    return newDate.toISOString().substring(0, 10)
  }
}

//Check for a leap year
function checkLeapYear(year) {
  if (
    Number.isInteger(year / 400) ||
    Number.isInteger(year / 4) && Number.isInteger(year / 100) != true
  ) {
    return true
  } else {
    return false
  }
}

//Number of days in a month
function monthDays(month, year) {
  if (month.toUpperCase() === "JAN" || "JANUARY" || "01" || "1" || 1) {
    return 31
  } else if (month.toUpperCase() === "FEB" || "FEBRUARY" || "02" || "2" || 2) {
    if (checkLeapYear(year) === true) {
      return 29
    } else {
      return 28
    }
  } else if (month.toUpperCase() === "MAR" || "MARCH" || "03" || "3" || 3) {
    return 31
  } else if (month.toUpperCase() === "APR" || "APRIL" || "04" || "4" || 4) {
    return 30
  } else if (month.toUpperCase() === "MAY" || "MAY" || "05" || "5" || 5) {
    return 31
  } else if (month.toUpperCase() === "JUN" || "JUNE" || "06" || "6" || 6) {
    return 30
  } else if (month.toUpperCase() === "JUL" || "JULY" || "07" || "7" || 7) {
    return 31
  } else if (month.toUpperCase() === "AUG" || "AUGUST" || "08" || "8" || 8) {
    return 31
  } else if (month.toUpperCase() === "SEP" || "SEPTEMBER" || "09" || "9" || 9) {
    return 30
  } else if (month.toUpperCase() === "OCT" || "OCTOBER" || "10" || 10) {
    return 31
  } else if (month.toUpperCase() === "NOV" || "NOVEMBER" || "11" || 11) {
    return 30
  } else if (month.toUpperCase() === "DEC" || "MADECEMBERRCH" || "12" || 12) {
    return 31
  } else {
    return "incorrect month supplied"
  }
}
//Count the number of days between two dates
//Date Format YYYY-MM-DD
function numOfDays(startDate, endDate) {
  startDate = new Date(startDate)
  endDate = new Date(endDate)
  return ((endDate - startDate) / (1000 * 60 * 60 * 24) + 1)
}

//Count the number of months between two dates (based on month and year only)
//Date Format YYYY-MM-DD
function numOfMonths(startDate, endDate) {
  startDate = new Date(startDate)
  endDate = new Date(endDate)
  return ((endDate.getFullYear() - startDate.getFullYear()) * 12) +
    (endDate.getMonth() - startDate.getMonth())
}

//Count the number of year between two dates (based on year only)
//Date Format YYYY-MM-DD
function numOfYears(startDate, endDate) {
  startDate = new Date(startDate)
  endDate = new Date(endDate)
  return (endDate.getFullYear() - startDate.getFullYear())
}

//Set a wait time in milliseconds
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
