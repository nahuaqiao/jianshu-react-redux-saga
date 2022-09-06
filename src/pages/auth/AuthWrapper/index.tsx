import React from "react"
import { Container } from 'react-bootstrap'
import { Outlet } from "react-router-dom"
import AuthTopNavBar from '../../../components/AuthTopNavBar'

interface Props { }

const AuthWrapper = (props: Props) => {
  return (

    <Container>
      <AuthTopNavBar />
      <Outlet />
    </Container>
  )
}

export default AuthWrapper
