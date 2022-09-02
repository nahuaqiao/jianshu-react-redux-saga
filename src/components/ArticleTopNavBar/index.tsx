import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { RootState } from '../../app/store'

interface Props {
  isLogged: boolean
  username: string
}

const ArticleTopNavBarUI = ({ isLogged, username }: Props) => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Brand>
          <Link to='/'>Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>

          <div className='d-flex'>
            <ButtonGroup>
              <Button variant='outline-success' href='/articles/post/'>
                Post Article
              </Button>
              <Button variant='outline-dark'>{`Welcome: ${username}`}</Button>
              {isLogged && <Button variant='outline-danger'>{`logout`}</Button>}
            </ButtonGroup>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// const ArticleTopNavBar = () => {
//   return <ArticleTopNavBarUI isLogged={true} username={'zs'} />
// }

const mapState = (state: RootState) => ({
  isLogged: state.userState.isLogged,
  username: state.userState.currentUser.username,
})

const ArticleTopNavBar = connect(mapState)(ArticleTopNavBarUI)

export default ArticleTopNavBar
