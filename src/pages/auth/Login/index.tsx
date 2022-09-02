import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavRouter } from '../../../hooks/routerHooks'

export const LoginForm = ({
  handleLoginFormSubmit,
}: {
  handleLoginFormSubmit: () => void
}) => {
  const { navToRegister } = useNavRouter()

  return (
    <Form onSubmit={handleLoginFormSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          name='username'
          type='text'
          placeholder='username'
          required={true}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name='password'
          type='password'
          placeholder='password'
          required={true}
        />
      </Form.Group>

      <Form.Group className='d-grid gap-2 mb-3'>
        <Button type='submit' variant='primary' size='lg'>
          {`Login`}
        </Button>
      </Form.Group>

      <Button onClick={navToRegister()} variant='link' size='lg'>
        {`Register`}
      </Button>
    </Form>
  )
}

interface Props {}

const Login = (props: Props) => {
  const handleLoginFormSubmit = () => {}

  return <LoginForm handleLoginFormSubmit={handleLoginFormSubmit} />
}

export default Login
