import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld.js';
import MyPage from './MyPage.js';
import * as serviceWorker from './serviceWorker';

import {Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

ReactDOM.render(
    <Router history={history}>
        <Route path="/helloworld" component={HelloWorld} />
        <Route path="/mypage" component={MyPage} />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
