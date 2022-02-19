// import Page404 from '@pages/common/Page404'
import { BuffRoute } from '@/typings'
import React from 'react'
import { Navigate, Route, Routes, Outlet } from 'react-router-dom'
export function FmtRoute({ routes }: { routes: BuffRoute[] }) {
  return (
    <Routes>
      {routes.map((route, k) => {
        // if (route.redirect) {
        //   return <Navigate key={k} to={route.redirect} />
        // }
        // const ChooseRoute = route.routeComponent ? route.routeComponent : Route
        if (route?.routes?.length) {
          ;<FmtRoute routes={route.routes || []} />
        }
        const Component: React.ReactElement = route.element ? route.element : <FmtRoute routes={route.routes || []} />
        // return <ChooseRoute key={k} path={route.path as string} element={<Component />} />
        return <Route key={k} path={route.path as string} element={Component} />
      })}
      {/* 这种方式打开直接就是404内容,但是url不变 */}
      {/* <Route component={Page404} /> */}
      {/* 这种方式就是直接跳转到/404 */}
      {/* <Redirect to={pathMap[404]} /> */}
    </Routes>
  )
}
