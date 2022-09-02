import { Comment } from './Comment'

export interface Article {
  id: number
  title: string
  content: string
  cover: string
  created: number
  user: string
  comments: Comment[]
}
