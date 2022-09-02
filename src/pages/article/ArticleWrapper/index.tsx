import { Outlet } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import ArticleTopNavBar from '../../../components/ArticleTopNavBar'

interface Props {
  children?: React.ReactNode
}

const ArticleWrapper = (props: Props) => {
  return (
    <Container>
      <ArticleTopNavBar />
      {props?.children}
      <Outlet />
    </Container>
  )
}

export default ArticleWrapper
