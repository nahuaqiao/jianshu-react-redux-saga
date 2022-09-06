import { all, fork } from 'redux-saga/effects'
import rootArticleSaga from './article.saga'
import rootUserSaga from './user.saga'

export default function* rootSaga() {
  yield all([fork(rootArticleSaga), fork(rootUserSaga)])
}
