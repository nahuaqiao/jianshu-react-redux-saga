import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import { connect } from 'react-redux'
import { RootState } from '../../../app/store'

import RouterLink from '../../../components/common/RouterLink'
import { Article } from '../../../models/Article'

export const ArticleListItem = ({ article }: { article: Article }) => {
  return (
    <RouterLink to={`/articles/detail/${article.id}/`}>
      <ListGroup.Item
        style={{ cursor: 'pointer' }}
        as='li'
        className='d-flex justify-content-between align-items-start'
      >
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>{article.title}</div>
          <div>{article.content}</div>
          <div className='muted-text'>{`Created by: ${article.user}, when: ${article.created}`}</div>
        </div>

        <Badge bg='primary' pill>
          {`${article.comments.length}`}
        </Badge>
      </ListGroup.Item>
    </RouterLink>
  )
}

interface Props {
  articles: Article[]
}

export const ArticleListUI = ({ articles }: Props) => {
  return (
    <main>
      <ListGroup as='ul'>
        {articles.map((article) => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </ListGroup>
    </main>
  )
}

const fakeArticleList: Article[] = [
  {
    id: 1,
    title: 'this is title',
    content: 'some content',
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWwWcHpya-SzuqZL8A0EDfnQPpo0Z3BQCCw&usqp=CAU',
    created: 123123213,
    user: '',
    comments: [],
  },
]

const mapState = (state: RootState) => ({
  articles: state.articleState.articles,
})

// const mapDispatch = (dispatch: AppDispatch) => {}
// const ArticleList = () => {
//   return <ArticleListUI articles={fakeArticleList} />
// }

const ArticleList = connect(mapState /* mapDispatch */)(ArticleListUI)

export default ArticleList
