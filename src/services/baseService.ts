import axios, { AxiosInstance } from 'axios'

/**
 * axios instance with base url
 */
const baseAxios: AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:12138/api/',
    timeout: 1000,
})


export default baseAxios
