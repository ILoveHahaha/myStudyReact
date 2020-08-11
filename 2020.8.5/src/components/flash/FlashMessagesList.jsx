import React from 'react'
import FlashMessage from './FlashMessage'
import { connect } from 'react-redux'

class FlashMessagesList extends React.Component{
  render () {

    const messages = this.props.messages.map(message => {
      return <FlashMessage key={ message.id } message={ message } />
    });

    return (
      <div className={'container'}>
        { messages }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.flashMessages
  }
};

export default connect(mapStateToProps)(FlashMessagesList)
