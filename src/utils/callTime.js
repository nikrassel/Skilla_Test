export default function callTime(time) {
    if (time < 60 && time < 10) {
        return `0:0${time}`
    } else if (time < 60 && time >= 10) {
        return `0:${time}`
    } else if (time >= 60) {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        if (seconds < 10) {
            return `${minutes}:0${seconds}`
        } else {
            return `${minutes}:${seconds}`
        }
    }
    return "0:00"
}
