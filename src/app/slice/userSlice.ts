import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/User";

export interface UserState {
    currentUser: User
    isLogged: boolean
}

const initialState: UserState = {
    currentUser: {
        id: NaN,
        username: '',
    },
    isLogged: false
}

export const userSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        setUser: (state: UserState, action: PayloadAction<{ user: User }>) => {
            state.currentUser = action.payload.user
        }
    }
})

export default userSlice.reducer