import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TokenState {
  access: string
  refresh: string
}

const initialState: TokenState = {
  access: '',
  refresh: '',
}

export const tokenSlice = createSlice({
  name: 'tokenState',
  initialState,
  reducers: {
    updateAccessTokenForRedux: (state: TokenState, action: PayloadAction<{ access: string }>) => {
      state.access = action.payload.access
    },
    updateRefreshTokenForRedux: (state: TokenState, action: PayloadAction<{ refresh: string }>) => {
      state.refresh = action.payload.refresh
    },
    removeTokenForRedux: (state: TokenState) => {
      state.access = ''
      state.refresh = ''
    }
  },
})

export const { updateAccessTokenForRedux, updateRefreshTokenForRedux, removeTokenForRedux } = tokenSlice.actions

export default tokenSlice.reducer