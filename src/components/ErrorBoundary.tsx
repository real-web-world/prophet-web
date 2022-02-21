import React, { ErrorInfo, Component } from 'react'

interface Props {}
interface State {
  hasError: boolean
}
/**
 * 错误边界
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // sentry
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <h1>网页加载失败, 请刷新重试</h1>
    }
    return this.props.children
  }
}
