import pathMap from '@/routes/pathMap'
import { Link } from 'react-router-dom'

interface Props {
  username: string
}
export default function Index(): React.ReactElement<Props> {
  return (
    <>
      <div>hello world</div>
      <Link to={pathMap.user.index}>user index</Link>
      <Link to={pathMap.user.buff}>user buff</Link>
    </>
  )
}
export function User(): React.ReactElement<Props> {
  return (
    <>
      <div>hello User</div>
    </>
  )
}
export function Buff(): React.ReactElement<Props> {
  return (
    <>
      <div>hello Buff</div>
    </>
  )
}
