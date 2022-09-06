import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Comment } from '../../models/Comment'

interface CommentState {
  comments: Comment[]
}

const initialState: CommentState = {
  comments: [],
}

export const commentSlice = createSlice({
  name: 'commentState',
  initialState,
  reducers: {
    postCommentForSaga: (state: CommentState, action: PayloadAction<{ articleId: number; content: string }>) => { },

  },
})

export const { postCommentForSaga } = commentSlice.actions

export default commentSlice.reducer
