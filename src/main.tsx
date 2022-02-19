import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@sass/app.scss'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'moment/locale/zh-cn'
import ErrorBoundary from './components/ErrorBoundary'
import { init } from '@utils/fn'
init()
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
)
