import React from 'react';

// shouldComponentUpdate这个生命周期函数支持两个参数，其中第一个参数可以用来判断数据是否发生改变，
// 因为不用这个生命周期的话父组件有数据更新会触发子组件更新

export default class Child extends React.Component{
  shouldComponentUpdate (nextProps, nextState) {
    return !(nextProps.num === this.props.num)
  }

  render () {
    return (
      <div>Child:{ this.props.num }</div>
    )
  }
}

