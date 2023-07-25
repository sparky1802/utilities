export {addDay, checkLeapYear, numOfDays, numOfMonths, numOfYear, sleep};

//Add days return string YYYY-MM-DD format
function addDay(date, days, timeZone) {
    const newDate = new Date(date);
//    newDate.setTime(newDate.getTime() + timeZone * 60 * 60 * 1000);
    newDate.setDate(newDate.getDate() + days);
    return newDate.toISOString().substring(0,10);
};

//Check for a leap year
function checkLeapYear(year) {
    if (Number.isInteger(year / 400) || Number.isInteger(year / 4) && Number.isInteger(year / 100) != true) {
        return true;
    } else {
        return false
    };
};

//Count the number of days between two dates
function numOfDays(startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    return ((endDate - startDate) / (1000 * 60  * 60 * 24)); 
}

//Count the number of months between two dates (based on month and year only)
function numOfMonths(startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    return ((endDate.getFullYear() - startDate.getFullYear()) * 12) + (endDate.getMonth() - startDate.getMonth())
}

//Count the number of year between two dates (based on year only)
function numOfYear(startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    return ((endDate.getFullYear() - startDate.getFullYear()));
}

//Set a wait time in milliseconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
