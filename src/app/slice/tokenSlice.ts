import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TokenState {
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
    updateAccessToken: (state: TokenState, action: PayloadAction<{ access: string }>) => {
      state.access = action.payload.access
    },
    updateRefreshToken: (state: TokenState, action: PayloadAction<{ refresh: string }>) => {
      state.refresh = action.payload.refresh
    }
  },
})

export const { updateAccessToken, updateRefreshToken } = tokenSlice.actions

export default tokenSlice.reducer