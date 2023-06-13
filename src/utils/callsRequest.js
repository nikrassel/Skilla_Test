import { getCurrentDate } from "./requestDate"

export default async function request(data) {
    try {
        const response = await fetch(`https://api.skilla.ru/mango/getList?date_start=${data}&date_end=${getCurrentDate()}&limit=1000`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer testtoken"
            }
        })
        const receved = await response.json()
        const result = receved.results
        return result
    } catch (error) {
        console.log(error.message)
    }  
}

export async function requestPeriod(from, to) {
    try {
        const response = await fetch(`https://api.skilla.ru/mango/getList?date_start=${from}&date_end=${to}&limit=1000`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer testtoken"
            }
        })
        const receved = await response.json()
        const result = receved.results
        return result
    } catch (error) {
        console.log(error.message)
    }  
}