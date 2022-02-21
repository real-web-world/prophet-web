import Header from '@/components/Header'
import { gSass } from '@/utils/global'
import { Outlet } from 'react-router-dom'

interface Props {
  username: string
}
const style = gSass.index.index
export default function Index(): React.ReactElement<Props> {
  return (
    <div className={style.main}>
      <Header />
      <Outlet />
    </div>
  )
}
export function Setting(): React.ReactElement<Props> {
  return (
    <>
      <div>hello Setting</div>
    </>
  )
}
export function Prophet(): React.ReactElement<Props> {
  return (
    <>
      <div>hello Prophet</div>
      <Outlet />
    </>
  )
}
export function Fn(): React.ReactElement<Props> {
  return (
    <>
      <div>hello Fn</div>
    </>
  )
}
