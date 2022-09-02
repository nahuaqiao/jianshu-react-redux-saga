import { all, fork } from "redux-saga/effects"
import { initialStateAsync } from "./configSaga"

export default function* rootSaga() {
    yield all([
        fork(initialStateAsync),
    ])
}