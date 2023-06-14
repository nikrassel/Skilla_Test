export default async function requestRecord(data) {
    try {
        const response = await fetch(
            `https://api.skilla.ru/mango/getRecord?record=${data}`,
            {
                method: "POST",
                headers: {
                    Authorization: "Bearer testtoken"
                }
            }
        )
        const result = await response.blob()
        const source = window.URL.createObjectURL(result)
        const audioObj = new Audio(source)
        audioObj.play()
        return "done"
    } catch (error) {
        console.log(error.message)
    }
}
