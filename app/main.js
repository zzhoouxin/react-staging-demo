/**
 * Created by zhouxin on 2018/2/5.
 */

import React from 'react';
import {IndexRoute, Route, Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Main from './views/main';

import createHashHistory from 'history/createHashHistory';


ReactDOM.render(
    <Router history={createHashHistory()} >
        <div>
            <Route exact path="/" component={Main} />
        </div>
    </Router>
   , document.getElementById('root'));

