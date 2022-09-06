import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { store } from '../app/store'

export let dataStore: (typeof store)

export const injectStore = (_store: (typeof store)) => {
    dataStore = _store
}
/**
 * axios instance with base url
 */
const baseAxios: AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:12138/api/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})

baseAxios.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${dataStore.getState().tokenState.access}`
    return config
})

export const getReq = async ({ url }: { url: string }) => {
    return await baseAxios({
        url,
        method: 'get',
    })
}

export const postReq = async ({ url, data }: { url: string; data: object }) => {
    return await baseAxios({
        url,
        method: 'post',
        data,
    })
}

export const postFileReq = async ({
    url,
    formData,
}: {
    url: string
    formData: FormData
}) => {
    return await baseAxios({
        url,
        method: 'post',
        data: formData,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
}

export const deleteReq = async ({ url }: { url: string }) => {
    return await baseAxios({
        url,
        method: 'delete',
    })
}

export const patchReq = async ({ url, formData }: { url: string; formData: FormData }) => {
    return await baseAxios({
        url,
        method: 'patch',
        data: formData
    })
}

export const putReq = async ({ url, formData }: { url: string; formData: FormData }) => {
    return await baseAxios({
        url,
        method: 'put',
        data: formData
    })
}

export default baseAxios
