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
    addMonth(dateObj, offset) {
        const {month} = getDateInfo(dateObj)

        dateObj.setMonth(month + offset)

        return dateObj
    },
    addYear(dateObj, offset) {
        const {year} = getDateInfo(dateObj)

        dateObj.setFullYear(year + offset)

        return dateObj
    },
    padLeft(number) {
        if (typeof number !== 'number') {
            throw new Error('Wrong type')
        }
        return (number >= 10 ? '' : '0') + number
    },
    getDateInfo,
}