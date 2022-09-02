import Axios from "./baseService";
import { getAccessToken, tokenCarriedService } from "./tokenService";

/**
 * 
 * @returns All articles
 */
export const getArticleListService = async () => (await Axios(`/articles/`)).data

/**
 * 
 * @param articleId special article id
 * @returns Article with @param articleId
 */
export const getArticleByIdService = async (articleId: number) => {
    try {
        return await Axios(`/articles/${articleId}/`)
    } catch {
        throw new Error(`There are no articles with article id ${articleId}.`)
    }
}

// ==================== need authorization ==================== //

/**
 * 
 * @param formData article form data
 * @returns The article object that was created
 */
export const postArticleService = async (formData: FormData) => {

    try {
        const access = (await getAccessToken()) as string
        const res = await tokenCarriedService(`/articles/`, 'POST', access, formData)
        return res
    }
    catch (e) {
        throw new Error(`Post article failed.`)
    }
}

// ==================== need authorization and article id ==================== //

/**
 * delete an article with an article id of @param articleId
 * @param articleId article id
 * @returns empty
 */
export const deleteArticleByIdService = async (articleId: number) => {
    try {
        return await Axios(`/articles/${articleId}/`)
    } catch {
        throw new Error(`Detele article with article id ${articleId} failed.`)
    }
}

/**
 * 
 * @param articleId article id
 * @param formData edited article id
 * @returns empty
 */
export const editArticleService = async (articleId: number, formData: FormData) => {

    try {
        const access = (await getAccessToken()) as string
        const res = await tokenCarriedService(`/articles/`, 'patch', access, formData)
        return res
    }
    catch {
        throw new Error(`Edit article with article id ${articleId} is failed.`)
    }
}