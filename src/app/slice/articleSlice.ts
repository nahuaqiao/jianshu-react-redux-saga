import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

import { Article } from '../../model/Article'

interface ArticleState {
  articles: Article[]
}

const initialState: ArticleState = {
  articles: [],
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    postArticle: (state, action: PayloadAction<number>) => {},
  },
})

export const { postArticle } = articleSlice.actions

export const selectArticles = (state: RootState) => state.article.articles
export default articleSlice.reducer
