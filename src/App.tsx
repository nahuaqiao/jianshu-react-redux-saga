import './App.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ArticleAdd from './page/article/ArticleAdd'
import ArticleDetail from './page/article/ArticleDetail'
import ArticleEdit from './page/article/ArticleEdit'
import ArticleList from './page/article/ArticleList'
import ArticleWrapper from './page/article/ArticleWrapper'
import Login from './page/auth/Login'
import Register from './page/auth/Register'
import UserWrapper from './page/auth/UserWrapper'
import NotFound from './page/NotFound'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/'>
            {/* articles ======================================================= articles */}
            <Route path='/articles' element={<ArticleWrapper />}>
              <Route path='/articles' element={<ArticleList />} />

              <Route path='/articles/post' element={<ArticleAdd />} />

              <Route
                path='/articles/detail/:articleId'
                element={<ArticleDetail />}
              />

              <Route
                path='/articles/edit/:articleId'
                element={<ArticleEdit />}
              />
            </Route>

            {/* users ======================================================= users */}
            <Route path='/users' element={<UserWrapper />}>
              <Route path='/users/login' element={<Login />} />

              <Route path='/users/register' element={<Register />} />
            </Route>

            {/* miss matching ======================================================= miss matching */}
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
