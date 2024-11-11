import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import { routeBaseName } from "./config/prod"
import routes from "./routes/app"

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
