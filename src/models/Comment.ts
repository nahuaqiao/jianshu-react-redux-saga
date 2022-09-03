export interface Comment {
  id: number
  content: string
  created: number
}

export const fakeComment = {
  id: 12138,
  content: 'fake comment',
  created: Date.now()
}