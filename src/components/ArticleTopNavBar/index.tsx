import React from 'react'
import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import RouterLink from '../common/RouterLink'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { removeUserForRedux, selectIsLogged, selectUsername, updateUserForRedux } from '../../app/slice/userSlice'
import { removeTokenForRedux } from '../../app/slice/tokenSlice'

const ArticleTopNavBar = () => {
  const dispatch = useAppDispatch()

  const username = useAppSelector(selectUsername)
  const isLogged = useAppSelector(selectIsLogged)

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>
        <Link to='/articles'>Home</Link>
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
            <Button variant='outline-dark active'>{username}</Button>
            {isLogged ? <>
              <Button variant='outline-success' href='/articles/post/'>
                {'Post Article'}
              </Button>
              <Button variant='outline-danger' onClick={() => {
                dispatch(removeTokenForRedux())
                dispatch(removeUserForRedux())
              }}>{`logout`}</Button>
            </> : <Button variant='outline-secondary'><RouterLink to={`/users/login/`}>{'Login'}</RouterLink></Button>}
          </ButtonGroup>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default ArticleTopNavBar
