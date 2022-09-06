import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Article } from '../../models/Article'
import { RootState } from '../store'

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
        //#region: action for saga
        initialArticleListForSaga: (state: ArticleState) => { },
        postArticleForSaga: (
            state: ArticleState,
            action: PayloadAction<{ formData: FormData }>
        ) => { },
        editArticleForSaga: (
            state: ArticleState,
            action: PayloadAction<{ articleId: number; formData: FormData }>
        ) => { },
        deleteArticleForSaga: (
            state: ArticleState,
            action: PayloadAction<{ articleId: number }>
        ) => { },
        //#endregion

        //#region: action from saga to change state
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
            console.log('index', index)
            state.articles.splice(index, 1)
        },
        //#endregion
    },
})

// Export all action.
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

export const selectArticleList = (state: RootState) =>
    state.articleState.articles
export const selectArticleById = (state: RootState, articleId: number) =>
    state.articleState.articles.find((article) => article.id === articleId)

export default articleSlice.reducer
