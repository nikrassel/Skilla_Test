const months = [
    "янв",
    "фев",
    "март",
    "апр",
    "мая",
    "июня",
    "июля",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек"
]
const days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
]
export default function dateFormater(dateObj) {
    const corTime = new Date(Number(dateObj))
    return `${days[corTime.getDay()]} ${corTime.getDate()} ${
        months[corTime.getMonth()]
    }`
}
