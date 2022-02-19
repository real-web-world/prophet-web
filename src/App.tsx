import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { FmtRoute } from './components/common/FmtRoute'
import { routeBaseName } from './config/prod'
import routes from './routes/app'

export default function App() {
  console.log('app init')
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('to be effect')
    document.title = `has ckick ${count} times`
  }, [])
  const a = (
    <div className="App flex">
      <p>
        <button onClick={() => setCount(count => count + 1)}>count is: {count}</button>
      </p>
    </div>
  )
  return (
    <>
      <Router basename={routeBaseName}>
        <FmtRoute routes={routes} />
      </Router>
    </>
  )
}
const _a = (
  <Routes>
    <Route
      path="/"
      element={
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/teams">teams</Link> <br />
          <Link to="/teams/123">teams 123</Link> <br />
          <Link to="/teams/new">teams new </Link> <br />
          <Link to="/teams/notexist/123">teams not exist </Link> <br />
          this is / <br />
          <Outlet />
        </div>
      }
    >
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
        <Route path="new" element={<div>this is teams new</div>} />
        {/* <Route path="*" element={<div>this is teams *</div>} /> */}
        {/* <Route index element={<div>this is none team index</div>} /> */}
      </Route>
    </Route>
    <Route path="*" element={<Navigate to="/404" state={{ buff: 1 }} replace={false} />} />
  </Routes>
)
