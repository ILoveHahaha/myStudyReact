import React from 'react'
import './style.less'
import { Link } from 'react-router-dom'

export default class HomeHeader extends React.Component{
    render () {
        return (
            <div id={'home-header'} className={'clear-fix'}>
                <div className={'home-header-left float-left'}>
                    <Link to={'/city'}>
                        <span>北京</span>
                    </Link>
                    <i className={'icon-angle-down'}></i>
                </div>
                <div className={'home-header-right float-right'}>
                    <i className={'iconfont icon-car'}></i>
                </div>
                <div className={'home-header-middle'}>
                    <div className="search-container">
                        <i className={'icon-search'}></i>
                        <input type={'text'} />
                    </div>
                </div>
            </div>
        )
    }
}
