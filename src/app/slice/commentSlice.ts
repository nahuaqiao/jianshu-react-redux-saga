import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

import { Comment } from '../../model/Comment'

interface CommentState {
  comments: Comment[]
}

const initialState: CommentState = {
  comments: [],
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    postComment: (state, action: PayloadAction<number>) => {},
  },
})

export const { postComment } = commentSlice.actions

export const selectComments = (state: RootState) => state.comment.comments
export default commentSlice.reducer
