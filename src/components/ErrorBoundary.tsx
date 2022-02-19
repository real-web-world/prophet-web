import React, { ErrorInfo, Component } from "react"

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
    // Update state so the next render will show the fallback UI.
    console.log(error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>网页加载失败, 请刷新</h1>
    }
    return this.props.children
  }
}
