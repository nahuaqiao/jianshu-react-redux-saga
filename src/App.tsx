import './App.scss'

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { RootState } from './app/store'
import { useAppDispatch } from './app/hooks'
import { fetchInitialState } from './app/slice/configSlice'

import Root from './pages/Root'
import { connect } from 'react-redux'
import Login from './pages/auth/Login'
import { Modal } from 'react-bootstrap'
import NotFound from './pages/NotFound'
import Register from './pages/auth/Register'
import TestWrapper from './pages/TestWrapper'
import AuthWrapper from './pages/auth/AuthWrapper'
import ArticleAdd from './pages/article/ArticlePost'
import ArticleEdit from './pages/article/ArticleEdit'
import ArticleList from './pages/article/ArticleList'
import ArticleDetail from './pages/article/ArticleDetail'
import ArticleWrapper from './pages/article/ArticleWrapper'
import TipModal from './components/common/TipModal'

interface Props {
  show: boolean
}

const AppUI = () => {
  // const dispatch = useAppDispatch()

  // React.useEffect(() => {
  //   dispatch(fetchInitialState())
  // }, [dispatch])

  return (
    <div className='App'>
      <TipModal />
      <Router>
        <Routes>
          {/* // ========================= root ========================= // */}
          <Route path='/' element={<Root />} />

          {/* // ========================= article ========================= // */}
          <Route path='/articles' element={<ArticleWrapper />}>
            <Route path='/articles' element={<ArticleList />} />
            <Route path='/articles/post' element={<ArticleAdd />} />
            <Route
              path='/articles/detail/:articleId'
              element={<ArticleDetail />}
            />
            <Route path='/articles/edit/:articleId' element={<ArticleEdit />} />
          </Route>

          {/* // ========================= users ========================= // */}
          <Route path='/users' element={<AuthWrapper />}>
            <Route path='/users/login' element={<Login />} />

            <Route path='/users/register' element={<Register />} />
          </Route>

          <Route path='/test' element={<TestWrapper />} />

          {/* // ========================= no match ========================= // */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default connect()(AppUI)

// connect((state: RootState) => ({
//   show: !state.configState.initialStateIsReady,
// }))(AppUI)
