import { Container } from 'react-bootstrap'
import AuthTopNavBar from '../../components/AuthTopNavBar'

const Root = () => {
  return <Container>
    <AuthTopNavBar />
    <main>
      {'the main page.'}
    </main>
  </Container>
}

export default Root
