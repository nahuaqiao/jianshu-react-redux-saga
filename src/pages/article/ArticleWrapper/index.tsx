import { Outlet } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import { RootState } from '../../../app/store'
import ArticleTopNavBar from '../../../components/ArticleTopNavBar'
import { connect } from 'react-redux'

interface Props {
  show: boolean
  children?: React.ReactNode
}

const ArticleWrapperUI = ({ show, children }: Props) => {
  return (
    <Container>
      <ArticleTopNavBar />
      <Outlet />
      {children}
    </Container>
  )
}

export default connect((state: RootState) => ({
  show: !state.configState.initialStateIsReady,
}))(ArticleWrapperUI)
