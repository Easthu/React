import React, { Component } from 'react';
import {HashRouter,Route} from 'react-router-dom'
import Login from '../pages/Login/index'
import Admin from '../pages/Admin/index'
class Router extends Component {
    render() {
        return (
            <HashRouter>
                {/* 路由 控制地址栏改变 */}
                <Route path='/login' component={Login}></Route>
                <Route path='/admin' component={Admin}></Route>
            </HashRouter>
        );
    }
}

export default Router;