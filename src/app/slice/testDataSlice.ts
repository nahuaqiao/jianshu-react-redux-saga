import { createSlice } from '@reduxjs/toolkit'

interface TestDataState {
    testData: number[]
    value: number
}

const initialState: TestDataState = {
    testData: [1, 1, 2],
    value: 100
}

export const testDataSlice = createSlice({
    name: 'testDataState',
    initialState,
    reducers: {
        increment: (state: TestDataState) => {
            state.value += 1
        },
    }
})

export const { increment } = testDataSlice.actions

export default testDataSlice.reducer