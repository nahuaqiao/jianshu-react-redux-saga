import { useAppSelector } from '../../../app/hooks'
import { selectAccess } from '../../../app/slice/tokenSlice'

interface Props {}

const ArticleWrapper = (props: Props) => {
  const access = useAppSelector(selectAccess)
  console.log('access', access)
  return <button>{access}</button>
}

export default ArticleWrapper
