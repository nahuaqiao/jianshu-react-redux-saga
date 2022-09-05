// React
import React from 'react'
import { Outlet } from 'react-router-dom'

// UI
import Container from 'react-bootstrap/Container'

// Custom
import { initialArticleListForSaga } from '../../../app/slice/articleSlice'
import ArticleTopNavBar from '../../../components/ArticleTopNavBar'
import { useAppDispatch } from '../../../app/hooks'

const ArticleWrapper = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(initialArticleListForSaga())
  }, [dispatch])

  return (
    <Container>
      <ArticleTopNavBar />
      <Outlet />
    </Container>
  )
}

export default ArticleWrapper
