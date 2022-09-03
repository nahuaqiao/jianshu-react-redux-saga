import { all, fork } from "redux-saga/effects"
import { initialStateAsync } from "./initial.saga"

export default function* rootSaga() {
    yield all([
        fork(initialStateAsync),
    ])
}