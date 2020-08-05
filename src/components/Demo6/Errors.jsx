import React from 'react'
export default class Errors extends React.Component {
  render () {
    return (
      <ul>
        {
          null.map((element, index) => {
            return <li>{element}</li>
          })
        }
      </ul>
    )
  }
}
