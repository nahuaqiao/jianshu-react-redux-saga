import { call, put, takeEvery } from "redux-saga/effects";
import { Article } from "../../models/Article";
import { getArticleListService } from "../../services/articleService";
import { initialArticleListForSaga, initialArticleListForRedux } from "../slice/articleSlice";

function delay(delayTimestamp: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, delayTimestamp)
  })
}

export function* fetchArticleListAsync() {
    yield call(delay, 2000)
  const articles: Article[] = yield call(getArticleListService)
  yield put(initialArticleListForRedux({articles}))
}
export function* catchInitArticleList() {
    yield takeEvery(initialArticleListForSaga().type, fetchArticleListAsync)
}

function* rootArticleSaga () {
    yield catchInitArticleList()
}

export default rootArticleSaga