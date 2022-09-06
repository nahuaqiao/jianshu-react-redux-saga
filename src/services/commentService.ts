import { postFileReq, postReq } from './baseService'

const URL_ARTICLE_BASE = '/articles'

export const postCommentService = async ({ articleId, content }: { articleId: number, content: string }) => {
    try {
        const formData = new FormData()
        formData.append('content', content)
        await postFileReq({ url: `${URL_ARTICLE_BASE}/${articleId}/comments/`, formData })
    } catch {
        throw new Error(`Post failed.`)
    }
}