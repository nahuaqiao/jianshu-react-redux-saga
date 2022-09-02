import React from 'react'
import { Link, To } from 'react-router-dom'

interface Props {
  to: To
  children: React.ReactNode
}

const RouterLink = ({ to, children }: Props) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      {children}
    </Link>
  )
}

export default RouterLink
