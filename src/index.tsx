import React from 'react'
import ReactDOM from 'react-dom/client'

import { PersistGate } from 'redux-persist/integration/react'

import mStore from './app/store'
import { Provider } from 'react-redux'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={mStore.store}>
    <PersistGate loading={null} persistor={mStore.persistor}>
      <App />
    </PersistGate>
  </Provider>
)
