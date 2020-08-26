import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/common.less';
import "./static/css/font.css";
import "./static/css/iconfont.css";
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import configtureStore from './store';

const store = configtureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
    , document.getElementById('root'));
