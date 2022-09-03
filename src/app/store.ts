import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './saga/root.saga'

import userReducer from './slice/userSlice'
import tokenReducer from './slice/tokenSlice'
import articleReducer from './slice/articleSlice'
import commentReducer from './slice/commentSlice'
import configReducer from './slice/configSlice'

import testDataReducer from './slice/testDataSlice'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//#region store persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  articleState: articleReducer,
  commentState: commentReducer,
  tokenState: tokenReducer,
  testDataState: testDataReducer,
  userState: userReducer,
  configState: configReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
//#endregion

const SagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).prepend(SagaMiddleware)
})

SagaMiddleware.run(rootSaga)

const myStore = {
  store,
  persistor: persistStore(store)
}

export default myStore