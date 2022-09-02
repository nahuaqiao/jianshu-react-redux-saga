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



export function* initialArticleTaskList() {
  yield call(delay, 2000)
  const articles: Article[] = yield call(getArticleListService)
  yield put(initialArticles({ articles }))
}

// task
// task list 
