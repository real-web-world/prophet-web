import Sidebar from '@/components/Sidebar'
import Page404 from '@/pages/common/Page404'
import Index, { Fn, Prophet, Setting } from '@pages/Index'
import { Outlet, RouteObject } from 'react-router-dom'
import m from './pathMap'
const routes: RouteObject[] = [
  {
    path: m[404],
    element: <Page404 />,
  },
  {
    path: m.index,
    children: [
      {
        path: m.index,
        element: <Index />,
        children: [
          {
            path: m.index,
            element: <Sidebar />,
            children: [
              {
                index: true,
                element: <Prophet />,
              },
              {
                path: m.prophet.index,
                element: <Prophet />,
              },
              {
                path: m.prophet.fn,
                element: <Fn />,
              },
              {
                path: m.prophet.setting,
                element: <Setting />,
              },
            ],
          },
        ],
      },
    ],
  },
]
export default routes
