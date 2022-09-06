import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../models/User"
import { RootState } from '../store'

export interface UserState {
    currentUser: User
    isLogged: boolean
}

const fakeUser = {
    username: 'Anonymous User',
}

const initialState: UserState = {
    currentUser: fakeUser,
    isLogged: false
}

export const userSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        registerForSaga: (state: UserState, action: PayloadAction<{
            username: string; email: string; password: string
        }>) => { },
        loginForSaga: (state: UserState, action: PayloadAction<{ username: string; password: string }>) => { },

        updateUserForRedux: (state: UserState, action: PayloadAction<{ user: User }>) => {
            state.currentUser = action.payload.user
            state.isLogged = true
        },
        removeUserForRedux: (state: UserState) => {
            state.currentUser = fakeUser
            state.isLogged = false
        },
    }
})

export const { registerForSaga, loginForSaga, updateUserForRedux, removeUserForRedux } = userSlice.actions

export const selectUsername = (state: RootState) => state.userState.currentUser.username
export const selectIsLogged = (state: RootState) => state.userState.isLogged

export default userSlice.reducer