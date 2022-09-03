import { Outlet } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import { RootState } from '../../../app/store'
import ArticleTopNavBar from '../../../components/ArticleTopNavBar'

interface Props {
  children?: React.ReactNode
}

const ArticleWrapperUI = ({ show }: Props) => {
  return (
    <Container>
      <Modal show={show} fullscreen={true}>
        <Modal.Body className='LoaderContainer'></Modal.Body>
      </Modal>
      <ArticleTopNavBar />
      <Outlet />
      {props?.children}
    </Container>
  )
}

export default connect((state: RootState) => ({show}))(ArticleWrapperUI)
