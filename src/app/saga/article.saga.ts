import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { Article } from '../../models/Article'
import { getArticleListService, postArticleService } from '../../services/articleService'
import alertSlice, { displayAlertForRedux } from '../slice/alertSlice'
import {
  initialArticleListForSaga,
  postArticleForSaga,
  editArticleForSaga,
  deleteArticleForSaga,

  initialArticlesForRedux,
  appendArticleForRedux,
  replaceArticleByIdForRedux,
  removeArticleByIdForRedux,
} from '../slice/articleSlice'

function* initialArticleListTask() {
  const articles: Article[] = yield getArticleListService()
  put(initialArticlesForRedux({ articles }))
}

function* postArticleTask(formData: any) {
  try {
    const newArticle: Article = yield postArticleService(formData)
    put(appendArticleForRedux({ newArticle }))
    put(displayAlertForRedux({
      content: {
        header: 'tips',
        detail: 'Post article succeed~'
      }
    }))
  } catch (error: any) {
    put(displayAlertForRedux({
      content: {
        header: 'error',
        detail: error.message
      }
    }))
  }
}

//#region: Catch actions and call Corresponding async-function
function* rootArticleSaga() {
  yield takeLatest(postArticleForSaga.type, postArticleTask)
  yield takeLatest(initialArticleListForSaga.type, initialArticleListTask)
}
//#endregion

export default rootArticleSaga
