import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type Alert = {
    title: string
    detail: string
}

export interface AlertState {
    display: boolean
    content: Alert
    onHide: () => void
}

const initialState: AlertState = {
    display: false,
    content: {
        title: '',
        detail: ''
    },
    onHide: () => { }
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        //#region action from saga to change state
        displayAlertForRedux: (state: AlertState, action: PayloadAction<{ content: Alert }>) => {
            state.content = action.payload.content
            state.display = true
        },

        hiddenAlertForRedux: (state: AlertState) => {
            state.display = false
        },
        resetAlertOnHide: (state: AlertState) => {
            state.onHide = () => { }
        }
        //#endregion
    }
})

// Export action creators.
export const { displayAlertForRedux, hiddenAlertForRedux, resetAlertOnHide } = alertSlice.actions

// Export selectors.
export const selectAlertDisplay = (state: RootState) => state.alertState.display
export const selectAlertContent = (state: RootState) => state.alertState.content
export const selectAlertOnHide = (state: RootState) => state.alertState.onHide

// Export reducer.
export default alertSlice.reducer





















