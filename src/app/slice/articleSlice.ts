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
    initialArticles: (state: ArticleState, action: PayloadAction<{ articles: Article[] }>) => {
      state.articles = action.payload.articles
    },

    addArticle: (state: ArticleState, action: PayloadAction<{ article: Article }>) => {
      state.articles.unshift(action.payload.article)
    },
  },
})

export const { initialArticles, addArticle } = articleSlice.actions

export default articleSlice.reducer