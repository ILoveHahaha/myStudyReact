import React, {Component} from 'react'

// 高阶复用组件,工厂函数
const withFetch = (url) => (View) => {
  return class extends Component{
    constructor(){
      super();
      this.state = {
        loading: true,
        data: null
      }
    }

    componentDidMount () {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({
            loading: false,
            data: data
          })
        })
    }

    render(){
      if (this.state.loading) {
        return (
          <div>loading...</div>
        )
      }
      else {
        return <View data={ this.state.data } />
      }
    }

  }
}

export default withFetch
