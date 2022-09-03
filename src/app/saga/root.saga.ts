import { all, fork } from 'redux-saga/effects'
import rootArticleSaga from './article.saga'

export default function* rootSaga() {
  yield all([fork(rootArticleSaga)])
}
