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
    getDateInfo
}