function corrector(timeObj) {
    if (timeObj > 9) {
        return timeObj
    } else {
        return "0" + timeObj
    }
}

export default function requestDate(days) {
    const today = new Date()
    const period = today - days * 86400000
    const corTime = new Date(Number(period))
    const year = corTime.getFullYear()
    const month = corTime.getMonth()
    const day = corTime.getDate()
    const result = `${year}-${corrector(month+1)}-${corrector(day)}`
    return result
}

export function getCurrentDate() {
    const today = new Date (Date.now())
    const year = today.getFullYear()
    const month = today.getMonth()
    const day = today.getDate()
    const result = `${year}-${corrector(month+1)}-${corrector(day)}`
    return result
}