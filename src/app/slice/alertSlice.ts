import { createSlice } from '@reduxjs/toolkit'

export type Alert = {
    header: string
    detail: string
}

export interface AlertState {
    display: boolean
    content: Alert
}

const initialState: AlertState = {
    display: false,
    content: {
        header: '',
        detail: ''
    }
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        //#region action from saga to change state
        displayAlertForRedux: (state: AlertState, action: PayloadAction<{ content: Alert }>) => {
            state.content = content
            state.display = true
        },

        hiddenAlertForRedux: (state: AlertState) => {
            state.display = false
        }
        //#endregion
    }
})