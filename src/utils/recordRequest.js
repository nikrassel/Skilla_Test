export default async function requestRecord(data) {
    try {
        const response = await fetch(`https://api.skilla.ru/mango/getRecord?record=${data}`, {
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