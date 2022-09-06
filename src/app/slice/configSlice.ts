import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
    initialStateIsReady: boolean
}

const initialState: ConfigState = {
    initialStateIsReady: false
}

const configSlice = createSlice({
    name: 'configState',
    initialState,
    reducers: {
        fetchInitialStateForSaga: () => { },
        setInitialStateIsReadyForRedux: (state: ConfigState, action: PayloadAction<{ initialStateIsReady: boolean }>) => {
            state.initialStateIsReady = action.payload.initialStateIsReady
        },

    }
})

export const { fetchInitialStateForSaga, setInitialStateIsReadyForRedux } = configSlice.actions

export default configSlice.reducer