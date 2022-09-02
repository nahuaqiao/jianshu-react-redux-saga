import { useNavigate } from 'react-router-dom'

const URL_LOGIN_PREFIX = '/users/login/'
const URL_REGISTER_PREFIX = '/users/register/'
const URL_ARTICLE_LIST_PREFIX = '/articles/'
const URL_ARTICLE_POST_PREFIX = '/articles/post/'
const URL_ARTICLE_EDIT_PREFIX = '/articles/edit/'
const URL_ARTICLE_DETAIL_PREFIX = '/articles/detail/'

export const useNavRouter = () => {
    const navigate = useNavigate()

    const navToLogin = () => () => navigate(`${URL_LOGIN_PREFIX}`)
    const navToRegister = () => () => navigate(`${URL_REGISTER_PREFIX}`)
    const navToArticleList = () => () => navigate(`${URL_ARTICLE_LIST_PREFIX}`)
    const navToArticlePost = () => () => navigate(`${URL_ARTICLE_POST_PREFIX}`)
    const navToArticleEdit = (articleId: number) => () =>
        navigate(`${URL_ARTICLE_EDIT_PREFIX}${articleId}/`)
    const navToArticleDetail = (articleId: number) => () =>
        navigate(`${URL_ARTICLE_DETAIL_PREFIX}${articleId}/`)

    return {
        navToLogin,
        navToRegister,
        navToArticleList,
        navToArticlePost,
        navToArticleEdit,
        navToArticleDetail,
    }
}
