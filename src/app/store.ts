import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'

import articleReducer from './slice/articleSlice'
import commentReducer from './slice/commentSlice'
import tokenReducer from './slice/tokenSlice'

const SagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    article: articleReducer,
    comment: commentReducer,
    token: tokenReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(SagaMiddleware)
  },
})

SagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
