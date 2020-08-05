import React from 'react'
import PropTypes from 'prop-types'
// 祖孙组件通信
const Topic = (props) => {
  return (
    <div>
      <Comment />
    </div>
  )
}

const Comment = (props, context) => {
  return (
    <div>
      {context.color}
    </div>
  )
}

export default class Demo3 extends React.Component {

  getChildContext () {
    return {
      color: 'red'
    }
  }

  render () {
    return (
      <div>
        <Topic />
      </div>
    )
  }
}

Comment.contextTypes = {
  color: PropTypes.string
}
Demo3.childContextTypes = {
  color: PropTypes.string
}
