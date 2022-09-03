import React from 'react'

import { connect } from 'react-redux'
import { AppDispatch } from '../../../app/store'
import { postArticleForSaga } from '../../../app/slice/articleSlice'
import { useAppDispatch } from '../../../app/hooks'

interface Props {
  handleSubmit: (title: string, content: string) => void
}

const ArticlePostUI = ({ handleSubmit }: Props) => {
  const dispatch = useAppDispatch()

  const [title, setTitle] = React.useState(`I'm a title`)
  const [content, setContent] = React.useState(`I'm a content`)

  return (
    <button
      onClick={() => {
        handleSubmit(title, content)
        // dispatch(
        //   postArticleForSaga({
        //     formData: title,
        //   })
        // )
      }}>
      this is article post page. {title}
    </button>
  )
}

const mapState = () => ({})

const mapDispatch = (dispatch: AppDispatch) => {
  console.log('mapDispatch is working')
  return {
    handleSubmit: (title: string, content: string) => {
      dispatch(
        postArticleForSaga({
          formData: {
            title,
            content,
          },
        })
      )
    },
  }
}

export default connect(mapState, mapDispatch)(ArticlePostUI)
