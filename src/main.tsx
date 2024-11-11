import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "@sass/global/app.scss"
import { ErrorBoundary } from "react-error-boundary"
import { init } from "@utils/fn"
import { ConfigProvider } from "antd"
init()
createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary fallback={<h1>网页加载失败, 请刷新重试</h1>}>
      <ConfigProvider theme={{ cssVar: true }}>
        <App />
      </ConfigProvider>
    </ErrorBoundary>
  </StrictMode>,
)
