import gSass from "@utils/sass"
import { Button } from "antd"
import { Link } from "react-router-dom"
import pathMap from "@/routes/pathMap"
const style = gSass.common.page404

const Page404: React.FC = () => {
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
export default Page404
