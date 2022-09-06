import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import { Article } from '../../../models/Article'
import { Comment } from '../../../models/Comment'
import {
  deleteArticleForSaga,
  selectArticleById,
} from '../../../app/slice/articleSlice'
import { RootState } from '../../../app/store'
import RouterLink from '../../../components/common/RouterLink'
import { useAppDispatch } from '../../../app/hooks'
import { timestampToFormatDateString } from '../../../utils/commonUtils'
import { postCommentForSaga } from '../../../app/slice/commentSlice'

export const ArticleCard = ({
  article,
  handleDeleteArticle,
}: {
  article: Article
  handleDeleteArticle: (articleId: number) => void
}) => {
  return (
    <article>
      <Card style={{ width: '80%', margin: '0 auto' }}>
        <div style={{ minHeight: 300 }}><Card.Img variant='top' src={article.cover} /></div>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.content}</Card.Text>
          <hr />
          <Card.Text>{`Created by: ${article.user
            }, when: ${timestampToFormatDateString(article.created)}`}</Card.Text>
          <ButtonToolbar className='justify-content-between'>
            <ButtonGroup>
              <RouterLink to={`/articles/edit/${article.id}`}>
                <Button variant='primary'>Edit Article</Button>
              </RouterLink>
            </ButtonGroup>
            <ButtonGroup>
              <Button
                variant='secondary'
                onClick={() => handleDeleteArticle(article.id)}
              >
                Delete Article
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Card.Body>
      </Card>
    </article >
  )
}

export const CommentCreateForm = ({
  handlePostComment,
}: {
  handlePostComment: (content: string) => void
}) => {
  const [content, setContent] = React.useState('')

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        handlePostComment(content)
      }}
    >
      <InputGroup className='mb-3'>
        <Form.Control
          name='content'
          placeholder='Post a friendly comment!'
          value={content}
          onChange={(e) => {
            setContent(e.target.value)
          }}
          required
        />
        <Button variant='outline-secondary' type='submit'>
          Post Comment
        </Button>
      </InputGroup>
    </Form>
  )
}

const CommentListItem = ({ comment }: { comment: Comment }) => {
  return (
    <ListGroup.Item
      as='li'
      className='d-flex justify-content-between align-items-start'
    >
      <div className='ms-2 me-auto'>
        <div className='fw-bold'>{comment.content}</div>
        <div>{`Created: ${timestampToFormatDateString(comment.created)}`}</div>
      </div>
    </ListGroup.Item>
  )
}

export const CommentList = ({ comments }: { comments: Comment[] }) => {
  return (
    <section>
      <ListGroup>
        {comments.map((comment) => (
          <CommentListItem key={comment.id} comment={comment} />
        ))}
      </ListGroup>
    </section>
  )
}

export const ArticleDetail = () => {
  const dispatch = useAppDispatch()

  const { articleId } = useParams()
  const articleIdNumber = articleId ? parseInt(articleId) : 0

  const article = useSelector((state: RootState) =>
    selectArticleById(state, articleIdNumber)
  )
  const handleDeleteArticle = (articleId: number) =>
    dispatch(deleteArticleForSaga({ articleId: articleIdNumber }))
  const handlePostComment = (content: string) => {
    dispatch(postCommentForSaga({ articleId: articleIdNumber, content }))
  }

  return (
    <main>
      {article ? (
        <>
          <ArticleCard
            article={article}
            handleDeleteArticle={handleDeleteArticle}
          />
          <hr />
          <CommentCreateForm handlePostComment={handlePostComment} />
          <CommentList comments={article.comments} />
        </>
      ) : (
        <span>{`Haven't articles with article id ${articleIdNumber}`}</span>
      )}
    </main>
  )
}

export default ArticleDetail
