import Page404 from "@/pages/common/Page404"
import DevClient from "@/pages/DevClient"
import Index from "@/pages/Index"
import SummerGameHistory from '@/components/gameRecord/SummerGameHistory'

import { type RouteObject, Navigate } from "react-router-dom"
import m from "./pathMap"
const routes: RouteObject[] = [
  {
    path: m[404],
    element: <Page404 />,
  },
  {
    path: m.index,
    element: <Index version="v0.2.5" />,
  },
  {
    path: m.dev.client,
    element: <DevClient />,
  },
  {
    path: '/game',
    element: <SummerGameHistory />,
  },
  {
    path: "*",
    element: <Navigate to={m[404]} />,
  },
]
export default routes
