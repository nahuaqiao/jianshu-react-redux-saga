import RouterLink from '../../components/common/RouterLink'

interface Props {}

const Root = (props: Props) => {
  return <RouterLink to='/articles/'>{`Just a friendly joke~`}</RouterLink>
}

export default Root
