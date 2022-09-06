import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom'

import { editArticleForSaga, selectArticleById } from '../../../app/slice/articleSlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'

const ArticleEdit = () => {
  const { articleId } = useParams()
  const articleIdNumber = articleId ? parseInt(articleId) : 0
  const dispatch = useAppDispatch()


  const article = useAppSelector((state) => selectArticleById(state, articleIdNumber))

  const [title, setTitle] = React.useState(article?.title || '')
  const [content, setContent] = React.useState(article?.content || '')

  return (
    <Form
      onSubmit={(e: any) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('content', content)
        formData.append('cover', e.target.cover.files[0])
        dispatch(editArticleForSaga({ articleId: articleIdNumber, formData }))
      }}
    >
      <Form.Group className='mb-3'>
        <Form.Label>Article Title</Form.Label>
        <Form.Control
          name='title'
          type='text'
          placeholder='title'
          required={false}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Article Content</Form.Label>
        <Form.Control
          name='content'
          as='textarea'
          rows={3}
          required={false}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Article Cover</Form.Label>
        <Form.Control
          name='cover'
          type='file'
          required={false}
        />
      </Form.Group>
      <Form.Group className='d-grid gap-2'>
        <Button type='submit' variant='primary' size='lg'>
          {`Edit Article`}
        </Button>
      </Form.Group>
    </Form>
  )
}

export default ArticleEdit
