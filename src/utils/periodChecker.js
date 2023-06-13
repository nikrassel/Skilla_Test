export default function periodChecker(from, to) {
    const fromArray = [
        Number(from.slice(0, 4)),
        Number(from.slice(5, 7)),
        Number(from.slice(8, 10))
    ]
    const toArray = [
        Number(to.slice(0, 4)),
        Number(to.slice(5, 7)),
        Number(to.slice(8, 10))
    ]
    if(toArray[0] > fromArray[0]) {
        return true
    } else if (toArray[0] >= fromArray[0] && toArray[1] > fromArray[1]) {
        return true
    } else if (toArray[0] >= fromArray[0] && toArray[1] >= fromArray[1] && toArray[2] >= fromArray[2]) {
        return true
    } else {
        return false
    }
}