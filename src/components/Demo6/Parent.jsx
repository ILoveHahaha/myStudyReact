import React from 'react'
import Errors from './Errors'
import ErrorBoundary from './ErrorBoundary'

export default class Parent extends React.Component {

  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render () {
    return (
      <div>
        <h3>这是一个标题</h3>
        <p>{this.state.count}</p>
        <ErrorBoundary render={(error, errorInfo) => <p>{'组件发生错误'}</p>}>
          <Errors/>
        </ErrorBoundary>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }

}

