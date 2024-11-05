import Page404 from "@/pages/common/Page404"
import Index from "@pages/Index"
import { type RouteObject, Navigate } from "react-router-dom"
import m from "./pathMap"
const routes: RouteObject[] = [
  {
    path: m[404],
    element: <Page404 />,
  },
  {
    path: m.index,
    element: <Index />,
  },
  {
    path: "*",
    element: <Navigate to={m[404]} />,
  },
]
export default routes
