import { Comment, fakeComment } from './Comment'

export interface Article {
  id: number
  title: string
  content: string
  cover: string
  created: number
  user: string
  comments: Comment[]
}

export const fakeArticle = {
  id: 12138,
  title: `fake title`,
  content: `fake content`,
  cover: `https://www.runoob.com/wp-content/themes/runoob/assets/img/404.jpg`,
  created: Date.now(),
  user: 'Fake User',
  comments: [fakeComment],
}