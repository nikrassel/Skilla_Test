export default function dayCorrector(num) {
    if ([10, 11, 12, 13, 14, 20, 30].includes(num)) {
        return "дней"
    }
    const lastNum = num % 10
    if (lastNum === 1) {
        return "день"
    } else if (lastNum < 5) {
        return "дня"
    } else {
        return "дней"
    }
}