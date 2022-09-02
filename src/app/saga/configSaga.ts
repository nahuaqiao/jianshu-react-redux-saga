import { put, takeLatest } from "redux-saga/effects"
import { fetchInitialState, setInitialStateIsReady, } from "../slice/configSlice"
import { initialArticle } from "./articleSaga"

function* initialArticlePart() {
    yield initialArticle()
    yield put(setInitialStateIsReady({
        initialStateIsReady: true
    }))
}

export function* initialStateAsync() {
    yield takeLatest(fetchInitialState().type, initialArticlePart)
}