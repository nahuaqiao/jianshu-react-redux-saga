import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AuthTopNavBar = () => {
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
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AuthTopNavBar
