import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useAppDispatch } from '../../../app/hooks'
import { postArticleForSaga } from '../../../app/slice/articleSlice'

const ArticlePost = () => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = React.useState(``)
  const [content, setContent] = React.useState(``)

  return (
    <Form
      onSubmit={(e: any) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('content', content)
        formData.append('cover', e.target.cover.files[0])
        dispatch(postArticleForSaga({ formData }))
      }}
    >
      <Form.Group className='mb-3'>
        <Form.Label>Article Title</Form.Label>
        <Form.Control
          name='title'
          type='text'
          placeholder='title'
          required={true}
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
          required={true}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Article Cover</Form.Label>
        <Form.Control
          name='cover'
          type='file'
          required={true}
        />
      </Form.Group>
      <Form.Group className='d-grid gap-2'>
        <Button type='submit' variant='primary' size='lg'>
          {`Post Article`}
        </Button>
      </Form.Group>
    </Form>
  )
}

export default ArticlePost
