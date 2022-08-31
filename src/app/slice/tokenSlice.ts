import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface TokenState {
  access: string
  refresh: string
}

const initialState: TokenState = {
  access: 'asdf',
  refresh: 'asdf',
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    verify: (state) => {},
  },
})

// action
export const { verify } = tokenSlice.actions

// select
export const selectAccess = (state: RootState) => state.token.access

// reducer
export default tokenSlice.reducer
