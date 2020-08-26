import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Life from '../pages/Life'
import Mine from '../pages/Mine'
import Shop from '../pages/Shop'
import City from '../pages/City'
import Search from '../pages/Search'
import NotFound from '../pages/NotFound'

import App from '../pages/app'

export default class AppRouter extends React.Component{
    render () {
        return (
            <HashRouter>
                <App path={'/'}>
                    <Switch>
                        <Route exact path={ '/' } component={ Home } />
                        <Route path={ '/life' } component={ Life } />
                        <Route path={ '/Mine' } component={ Mine } />
                        <Route path={ '/shop' } component={ Shop } />
                        <Route path={ '/city' } component={ City } />
                        <Route path={ '/search' } component={ Search }></Route>
                        <Route path={ '*' } component={ NotFound } />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
