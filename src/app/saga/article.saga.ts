import { call, put } from "redux-saga/effects";
import { Article } from "../../models/Article";
import { getArticleListService } from "../../services/articleService";
import { initialArticles } from "../slice/articleSlice";

function delay(delayTimestamp: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, delayTimestamp)
  })
}

///#region task

///#endregion

///#region task list
export function* initialArticle() {
  yield call(delay, 2000)
  const articles: Article[] = yield call(getArticleListService)
  yield put(initialArticles({ articles }))
}
///#endregion
