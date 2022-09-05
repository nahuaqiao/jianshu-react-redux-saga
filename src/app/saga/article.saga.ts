import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { Article } from '../../models/Article'
import { getArticleListService, postArticleService } from '../../services/articleService'
import { delay } from '../../utils/commonUtils'
import alertSlice, { displayAlertForRedux } from '../slice/alertSlice'
import {
  initialArticleListForSaga,
  editArticleForSaga,
  deleteArticleForSaga,

  initialArticlesForRedux,
  appendArticleForRedux,
  replaceArticleByIdForRedux,
  removeArticleByIdForRedux,
  postArticleForSaga,
} from '../slice/articleSlice'

function* initialArticleListTask() {
  yield delay(2000)
  const articles: Article[] = yield call(getArticleListService)
  yield put(initialArticlesForRedux({ articles }))
}

function* postArticleTask({ type, payload: { formData } }: { type: string; payload: { formData: FormData } }) {
  console.log('payload', formData)
  try {
    const newArticle: Article = yield call(postArticleService, formData)
    yield put(appendArticleForRedux({ newArticle }))
    yield put(displayAlertForRedux({
      content: {
        header: 'tips',
        detail: 'Post article succeed~'
      }
    }))
  } catch (error: any) {
    console.log('@37')
    yield put(displayAlertForRedux({
      content: {
        header: 'error',
        detail: error.message
      }
    }))
  }
}

//#region: Catch actions and call Corresponding async-function
function* rootArticleSaga() {
  yield takeLatest(initialArticleListForSaga.type, initialArticleListTask)
  yield takeLatest(postArticleForSaga.type, postArticleTask)
}
//#endregion

export default rootArticleSaga
