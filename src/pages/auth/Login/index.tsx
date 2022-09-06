import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import RouterLink from '../../../components/common/RouterLink'
import { useAppDispatch } from '../../../app/hooks'
import { loginForSaga } from '../../../app/slice/userSlice'
import React from 'react'

export const Login = () => {
  const dispatch = useAppDispatch()

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <Form onSubmit={(e) => {
      e.preventDefault()
      dispatch(loginForSaga({ username, password }))
    }}>
      <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          name='username'
          type='text'
          placeholder='username'
          required={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name='password'
          type='password'
          placeholder='password'
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='d-grid gap-2 mb-3'>
        <Button type='submit' variant='primary' size='lg'>
          {`Login`}
        </Button>
      </Form.Group>

      <Button variant='link' size='lg'>
        <RouterLink to='/users/register'>{`Register`}</RouterLink>
      </Button>
    </Form>
  )
}

export default Login
