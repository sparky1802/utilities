export {addDay, sleep};
//Add days
function addDay(date, days, timeZone) {
    const newDate = new Date(date);
    newDate.setTime(newDate.getTime() + timeZone * 60 * 60 * 1000);
    newDate.setDate(newDate.getDate() + days);
    return newDate.toISOString().substring(0,10);
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
