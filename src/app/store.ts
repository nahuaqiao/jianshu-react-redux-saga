import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './saga/root.saga'

import userReducer from './slice/userSlice'
import tokenReducer from './slice/tokenSlice'
import articleReducer from './slice/articleSlice'
import commentReducer from './slice/commentSlice'
import configReducer from './slice/configSlice'
import alertReducer from './slice/alertSlice'

import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Store persist in localStorage.
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

// Combine all reducers into root reducer for persist.
const rootReducer = combineReducers({
  alertState: alertReducer,
  articleState: articleReducer,
  commentState: commentReducer,
  tokenState: tokenReducer,
  userState: userReducer,
  configState: configReducer
})

// initial persist reducer by persist config.
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create saga middleware.
const SagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  // Initial root reducer.
  reducer: persistedReducer,

  // Add saga middleware to the middleware list.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, postArticleForSaga.type],
    // },
  }).prepend(SagaMiddleware)
})

// Start saga.
SagaMiddleware.run(rootSaga)

// Export store and persistor store.

export const persistor = persistStore(store)