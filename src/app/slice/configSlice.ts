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
        fetchInitialState: () => { },
        setInitialStateIsReady: (state: ConfigState, action: PayloadAction<{ initialStateIsReady: boolean }>) => {
            state.initialStateIsReady = action.payload.initialStateIsReady
        },

    }
})

export const { fetchInitialState, setInitialStateIsReady } = configSlice.actions

export default configSlice.reducer