import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useAppDispatch } from '../../../app/hooks'
import { registerForSaga } from '../../../app/slice/userSlice'
import RouterLink from '../../../components/common/RouterLink'

interface Props { }

const Register = (props: Props) => {
  const dispatch = useAppDispatch()

  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <Form onSubmit={(e) => {
      e.preventDefault()
      dispatch(registerForSaga({ username, password, email }))
    }}>
      <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          name='username'
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required={true}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name='email'
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name='password'
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control
          name='repeatpwd'
          type='password'
          placeholder='repeat password'
          required={true}
        />
      </Form.Group>

      <Form.Group className='d-grid gap-2 mb-3'>
        <Button type='submit' variant='primary' size='lg'>
          {`Register`}
        </Button>
      </Form.Group>
      <Form.Group className=''>
        <Button variant='link' size='lg'>
          <RouterLink to='/users/login'>{`Login`}</RouterLink>
        </Button>
      </Form.Group>
    </Form>
  )
}

export default Register
