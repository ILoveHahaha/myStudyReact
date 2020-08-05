import React from 'react'
import Child from './child'
import Child1 from './child1'

// 计数例子
// 定时器、网络请求、事件监听等异步事件在组件被销毁前都应得到相应的处理

const MyAPI = {
  count: 0,
  subscribe(cb){
    this.intervalId = setInterval(() => {
      this.count += 1;
      cb(this.count)
    }, 1000)
  },
  unsubscribe(){
    clearInterval(this.intervalId);
    this.reset()
  },
  reset(){
    this.count = 0
  }
}

export default class Parent extends React.Component {

  state = {
    count: 0
  }

  componentDidMount () {
    MyAPI.subscribe((currentCount) => {
      this.setState({
        count: currentCount
      })
    })
  }

  componentWillUnmount () {
    MyAPI.unsubscribe()
  }

  render () {
    return (
      <div>
        Parent: { this.state.count }
        <Child num={ this.state.count } />
        <Child1 num={ this.state.count } />
      </div>
    )
  }
}
