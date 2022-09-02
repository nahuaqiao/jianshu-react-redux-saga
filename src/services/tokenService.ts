import { Method } from "axios"

import baseAxios from "./baseService"
import mStore from "../app/store"

/**
 * 
 * @param url request url
 * @param method request method
 * @param token authorization jwt
 * @param formData user username and password form data
 * @returns An object include new access token and refresh token
 */
export const tokenCarriedService = async (url: string, method: Method, token: string, formData?: any): Promise<{ access: string, refresh: string }> => {
    try {
        return (await baseAxios({
            url,
            method,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/multipart/form-data;',
            },
            data: formData
        })).data
    } catch (e) {
        throw e
    }
}

export const verifyToken = async (token: string) => {
    try {
        await baseAxios({
            url: '/token/verify',
            method: 'post',
            data: {
                token
            }
        })
        return true
    } catch {
        return false
    }
}

export const getAccessToken = async () => {
    let access = mStore.store.getState().tokenState.access
    try {
        if (await verifyToken(access)) {
            return access
        } else {
            return await refreshToken()
        }
    } catch {
        throw new Error(`The current user does not have the required permissions for this operation.`)
    }
}

export const refreshToken = async () => {
    const refresh = mStore.store.getState().tokenState.refresh
    try {
        const accessRes = await baseAxios({
            url: '/token/refresh',
            method: 'post',
            data: {
                refresh
            }
        })
        return accessRes.data.access
    } catch (e) {
        throw new Error(`The current state is not logged in.`)
    }

}