import baseAxios from "./baseService"
import { getAccessToken } from "./tokenService"

export const b64_to_utf8 = (payloadSecretKey: string) => {
    return decodeURIComponent(window.atob(payloadSecretKey))
}

export const getUserIdFromToken = (token: string): number => {
    return JSON.parse(b64_to_utf8(token.split('.')[1])).user_id
}

export const getUserName = async () => {
    try {
        const accessToken = await getAccessToken() as string
        return (await baseAxios(`/users/${getUserIdFromToken(accessToken)}`)).data.username
    } catch {
        // throw new Error(`The current state is not logged in.`)
        return `Anonymous User`
    }
}
