import React from 'react'
import withFetch from '../withFetch'

const Banner = withFetch('http://fundgz.1234567.com.cn/js/510500.js?rt=1596631149408')(props => {
  return (
    <div>
      <p>
        {props.data}
      </p>
    </div>
  )
})

export default Banner
