export async function composeValidateResponseObject(response) {
    if (response.ok) {
        const responseData = await response.json()
        // return { response, responseData }
        return responseData
    } else {
        throw Error(response.status)
    }
}