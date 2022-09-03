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
    getArticleListForSaga: (state: ArticleState) => { },
    addArticleForSaga: (state: ArticleState, action: PayloadAction<{ formData: any }>) => { },
    editArticleForSaga: (state: ArticleState, action: PayloadAction<{ articleId: number; formData: any }>) => { },
    deleteArticleForSaga: (state: ArticleState, action: PayloadAction<{ articleId: number }>) => { },
    //#endregion

    //#region action from saga to change state
    initialArticlesForRedux: (state, action: PayloadAction<{ articles: Article[] }>) => { }
    //#endregion
  },
})

export const { initialArticles, addArticle } = articleSlice.actions

export default articleSlice.reducer