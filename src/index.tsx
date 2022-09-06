import React from 'react'
import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'
import { store, persistor } from './app/store'
import { injectStore } from './services/baseService'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

injectStore(store)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
