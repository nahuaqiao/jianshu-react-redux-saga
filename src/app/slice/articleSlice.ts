import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Article } from '../../models/Article'

export interface ArticleState {
    articles: Article[]
}

const initialState: ArticleState = {
    articles: [],
}

export const articleSlice = createSlice({
    name: 'articleState',
    initialState,
    reducers: {
        //#region action for saga
        initialArticleListForSaga: (state: ArticleState) => { },
        postArticleForSaga: (
            state: ArticleState,
            action: PayloadAction<{ formData: any }>
        ) => {
            console.log('@23 post article for saga is called')
        },
        editArticleForSaga: (
            state: ArticleState,
            action: PayloadAction<{ articleId: number; formData: any }>
        ) => { },
        deleteArticleForSaga: (
            state: ArticleState,
            action: PayloadAction<{ articleId: number }>
        ) => { },
        //#endregion

        //#region action from saga to change state
        initialArticlesForRedux: (
            state: ArticleState,
            action: PayloadAction<{ articles: Article[] }>
        ) => {
            state.articles = action.payload.articles
        },
        appendArticleForRedux: (
            state: ArticleState,
            action: PayloadAction<{ newArticle: Article }>
        ) => {
            state.articles.push(action.payload.newArticle)
        },
        replaceArticleByIdForRedux: (
            state: ArticleState,
            action: PayloadAction<{ articleId: number; newArticle: Article }>
        ) => {
            const index = state.articles.findIndex(
                (article) => article.id === action.payload.articleId
            )
            state.articles.splice(index, 1, action.payload.newArticle)
        },
        removeArticleByIdForRedux: (
            state: ArticleState,
            action: PayloadAction<{ articleId: number }>
        ) => {
            const index = state.articles.findIndex(
                (article) => article.id === action.payload.articleId
            )
            state.articles.splice(index, 1)
        },
        //#endregion
    },
})

export const {
    initialArticleListForSaga,
    postArticleForSaga,
    editArticleForSaga,
    deleteArticleForSaga,

    initialArticlesForRedux,
    appendArticleForRedux,
    replaceArticleByIdForRedux,
    removeArticleByIdForRedux,

} = articleSlice.actions

export default articleSlice.reducer
