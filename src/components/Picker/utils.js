function getDateInfo(dateObj) {
    return {
        year: dateObj.getFullYear(),
        month: dateObj.getMonth(),
        date: dateObj.getDate()
    }
}

export default {
    firstDayOfMonth(dateObj) {
        const {year, month} = getDateInfo(dateObj)
        return new Date(year, month, 1)
    },
    lastDayOfMonth(dateObj) {
        const {year, month} = getDateInfo(dateObj)
        return new Date(year, month + 1, 0)
    },
    getFirstDateMs(firstDateInMonth) {
        return firstDateInMonth - (firstDateInMonth.getDay() === 0 ? 6 : firstDateInMonth.getDay() - 1) * 3600 * 24 * 1000
    },
    addDayInMs(currentMs, dayNum) {
        return currentMs + dayNum * 3600 * 24 * 1000
    },
    getDateInfo
}