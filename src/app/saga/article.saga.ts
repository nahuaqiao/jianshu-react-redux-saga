import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { Article } from '../../models/Article'
import { deleteArticleByIdService, editArticleByIdService, getArticleListService, postArticleService } from '../../services/articleService'
import { postCommentService } from '../../services/commentService'
import { delay } from '../../utils/commonUtils'
import { displayAlertForRedux } from '../slice/alertSlice'
import {
  initialArticleListForSaga,
  editArticleForSaga,
  deleteArticleForSaga,

  initialArticlesForRedux,
  appendArticleForRedux,
  postArticleForSaga,
  removeArticleByIdForRedux,
} from '../slice/articleSlice'
import { postCommentForSaga } from '../slice/commentSlice'

export function* alertTask(type: 'error' | 'success', msg: string) {
  yield put(displayAlertForRedux({
    content: {
      title: type,
      detail: msg
    }
  }))
}

function* initialArticleListTask() {
  try {
    yield delay(2000)
    const articles: Article[] = yield call(getArticleListService)
    yield put(initialArticlesForRedux({ articles }))
  } catch (error: any) {
    yield alertTask('error', error.message)
  }
}

function* postArticleTask({ type, payload: { formData } }: { type: string; payload: { formData: FormData } }) {
  try {
    const newArticle: Article = yield call(postArticleService, formData)
    yield put(appendArticleForRedux({ newArticle }))
    yield alertTask('success', 'Post article succeed~')
  } catch (error: any) {
    yield alertTask('error', error.message)
  }
}

function* editArticleTask({ type, payload: { articleId, formData } }: { type: string; payload: { articleId: number; formData: FormData } }) {
  try {
    yield call(editArticleByIdService, articleId, formData)
    yield alertTask('success', 'Edit article succeed~')
  } catch (error: any) {
    yield alertTask('error', error.message)
  }
}

function* deleteArticleTask({ type, payload: { articleId } }: { type: string; payload: { articleId: number } }) {
  try {
    yield call(deleteArticleByIdService, articleId)
    yield alertTask('success', 'Delete article succeed~')
  } catch (error: any) {
    yield put(displayAlertForRedux({
      content: {
        title: 'error',
        detail: error.message
      }
    }))
  }
}

function* postCommentTask({ type, payload: { articleId, content } }: { type: string; payload: { articleId: number; content: string } }) {
  try {
    yield call(postCommentService, { articleId, content })
    yield alertTask('success', 'Post message succeed!')
    yield put(removeArticleByIdForRedux({ articleId }))
  } catch (error: any) {
    yield alertTask('error', error.message)
  }
}

//#region: Catch actions and call Corresponding async-function
export default function* rootArticleSaga() {
  yield takeLatest(initialArticleListForSaga.type, initialArticleListTask)
  yield takeLatest(postArticleForSaga.type, postArticleTask)
  yield takeLatest(editArticleForSaga.type, editArticleTask)
  yield takeEvery(deleteArticleForSaga.type, deleteArticleTask)
  yield takeEvery(postCommentForSaga.type, postCommentTask)
}
//#endregion