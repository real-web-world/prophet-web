import { Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { Outlet } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
      <Menu>
        <Menu.Item key="home">主页</Menu.Item>
        <Menu.Item key="fn">功能</Menu.Item>
        <Menu.Item key="setting">设置</Menu.Item>
      </Menu>
      <Outlet />
    </div>
  )
}
