import ArticleList from '../article/ArticleList'
import ArticleWrapper from '../article/ArticleWrapper'

interface Props {}

const Root = (props: Props) => {
  return (
    <ArticleWrapper>
      <ArticleList />
    </ArticleWrapper>
  )
}

export default Root
