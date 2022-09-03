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
    postComment: (state: CommentState, action: PayloadAction<number>) => { },
  },
})

export const { postComment } = commentSlice.actions

export default commentSlice.reducer
