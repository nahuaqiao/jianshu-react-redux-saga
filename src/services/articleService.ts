import { getReq, patchReq, postFileReq, deleteReq } from './baseService'

const URL_ARTICLE_BASE = '/articles'

export const getArticleListService = async () => {
    try {
        return (await getReq({ url: `${URL_ARTICLE_BASE}/` })).data
    } catch {
        throw new Error(`Get article list failed.`)
    }
}

export const getArticleByIdService = async (articleId: number) => {
    try {
        return await getReq({ url: `${URL_ARTICLE_BASE}/${articleId}` })
    } catch {
        throw new Error(`Get article failed.`)
    }
}

export const postArticleService = async (formData: FormData) => {
    try {
        return await postFileReq({ url: `${URL_ARTICLE_BASE}/`, formData })
    } catch {
        throw new Error(`Post failed.`)
    }
}

export const editArticleByIdService = async (
    articleId: number,
    formData: FormData
) => {
    try { return await patchReq({ url: `${URL_ARTICLE_BASE}/${articleId}/`, formData }) } catch {
        throw new Error(`Edit failed.`)
    }
}

export const deleteArticleByIdService = async (articleId: number) => {
    try { return await deleteReq({ url: `${URL_ARTICLE_BASE}/${articleId}/` }) } catch {
        throw new Error(`Delete failed.`)
    }
}