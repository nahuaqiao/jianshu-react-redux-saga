import React from 'react'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import { useAppSelector } from '../../../app/hooks'
import { selectArticleList } from '../../../app/slice/articleSlice'

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
          {`${article.comments?.length || 0}`}
        </Badge>
      </ListGroup.Item>
    </RouterLink>
  )
}

export const ArticleList = () => {
  const articles = useAppSelector(selectArticleList)

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

export default ArticleList
