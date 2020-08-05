import React from 'react'
// 错误边界
export default class ErrorBoundary extends React.Component {

  state = {
    hasError: false,
    error: null,
    errorInfo: null
  }

  // 专门捕获错误的子元素生命周期函数
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })
  }

  render () {
    if (this.state.hasError) {
      return <div>{this.props.render(this.state.error, this.state.errorInfo)}</div>
    }
    return this.props.children;
  }
}
