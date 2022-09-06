import { TokenState } from '../app/slice/tokenSlice'
import { dataStore, getReq, postFileReq, postReq } from './baseService'

export const b64_to_utf8 = (payloadSecretKey: string) => {
    return decodeURIComponent(window.atob(payloadSecretKey))
}

export const registerService = async ({ username, email, password }: { username: string; email: string; password: string }) => {
    try {
        const formData = new FormData()
        formData.append('username', username)
        formData.append('email', email)
        formData.append('password', password)
        return await postFileReq({ url: '/users/', formData })
    } catch (error) {
        throw new Error('Register failed.')
    }
}

export const loginService = async ({ username, password }: { username: string; password: string }) => {
    try {
        // data: { username, password } 
        const formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)
        return (await postReq({ url: `/token/`, data: { username, password } })).data as TokenState
    } catch {
        throw new Error('Login failed.')
    }
}
