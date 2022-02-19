import React, { Component } from 'react'
import gSass from '@utils/sass'
import gImg from '@utils/img'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import pathMap from '@/routes/pathMap'
const style = gSass.common.page404
interface Props {}

export default function Page404(): React.ReactElement<Props> {
  return (
    <div className={style.main}>
      <div className={style.title}>404</div>
      <div className={style.desc}>抱歉，你访问的页面不存在。</div>
      <Button type="primary">
        <Link to={pathMap.index}>返回首页</Link>
      </Button>
    </div>
  )
}
