import RouterLink from '../../components/common/RouterLink'
import ArticleList from '../article/ArticleList'
import ArticleWrapper from '../article/ArticleWrapper'

interface Props {}

const Root = (props: Props) => {
  return <RouterLink to='/articles/'>{`Just a friendly joke~`}</RouterLink>
}

export default Root
