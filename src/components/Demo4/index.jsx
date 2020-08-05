import React from 'react'

// 高阶组件
const withFetch = (ComposeComponent) => {
  return class extends React.Component {
    render () {
      return (
        <ComposeComponent {...this.props} />
      )
    }
  }
}

class MyData extends React.Component{
  render () {
    return (
      <div>
        MyData:{this.props.data}
      </div>
    )
  }
}

const WithFetch = withFetch(MyData)

export default class Demo4 extends React.Component{
  render () {
    return (
      <div>
        <WithFetch data={'Hello WithFetch'} />
      </div>
    )
  }
}
