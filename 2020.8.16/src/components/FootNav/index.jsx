import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'

export default class FootNav extends React.Component{
    render () {
        return (
            <div className={'nav-footer'}>
                <ul children={'clear-fix'}>
                    <li>
                        <NavLink exact to={'/'}>首页</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/shop'}>商城</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/life'}>生活服务</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/mine'}>我的</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
