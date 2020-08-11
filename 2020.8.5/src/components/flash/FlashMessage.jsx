import React from 'react'
import classnames from 'classnames'

export default class FlashMessage extends React.Component{
  render () {
    const { type, text } = this.props.message
    return (
      <div className={ classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'danger'
      }) }>{ text }</div>
    )
  }
}
