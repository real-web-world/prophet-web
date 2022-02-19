import Page404 from '@/pages/common/Page404'
import { BuffRoute } from '@/typings'
import Index, { Buff, User } from '@pages/Index'
import pathMap from './pathMap'
const routes = [
  {
    name: '404',
    path: pathMap[404],
    element: Page404,
  },
  {
    name: '基础路由',
    path: pathMap.index,
    routes: [
      {
        name: '首页',
        path: pathMap.index,
        routes: [
          {
            name: '用户中心',
            path: pathMap.user.index,
            routes: [
              {
                name: '用户中心-buff',
                path: pathMap.user.buff,
                routes: [],
                element: <Buff />,
              },
            ],
            element: <User />,
          },
        ],
        element: <Index />,
      },
    ],
  },
] as BuffRoute[]
export default routes
