import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, Link, useParams, useRoutes } from 'react-router-dom'
import { routeBaseName } from './config/prod'
import routes from './routes/app'
const Index = () => {
  const a = useParams()
  console.log(15, a)
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/teams">teams</Link> <br />
      <Link to="/teams/123">teams 123</Link> <br />
      <Link to="/teams/new">teams new </Link> <br />
      <Link to="/teams/notexist/123">teams not exist </Link> <br />
      <Link to="/asff">other not exist </Link> <br />
      this is / <br />
      <Outlet />
    </div>
  )
}
const T = () => {
  ;<Router>
    <Routes>
      <Route path="/" element={<Index />}>
        <Route
          path="teams"
          element={
            <div>
              <div>this is teams</div>
              <Outlet />
            </div>
          }
        >
          <Route path=":teamId" element={<div>this is teams id</div>} />
          <Route path="/teams/new" element={<div>this is teams new</div>} />
          <Route path="*" element={<div>this is teams *</div>} />
          <Route index element={<div>this is none team index</div>} />
        </Route>
      </Route>
      <Route path="/404" element={<div>this is 404</div>} />
      <Route path="*" element={<Navigate to="/404" state={{ buff: 1 }} replace={false} />} />
    </Routes>
  </Router>
}
const WarpRoute = () => {
  const element = useRoutes(routes)
  return <>{element}</>
}
export default function App() {
  return (
    <Router basename={routeBaseName}>
      <WarpRoute />
    </Router>
  )
}
