export default async function request() {
    try {
        const response = await fetch("https://api.skilla.ru/mango/getList", {
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