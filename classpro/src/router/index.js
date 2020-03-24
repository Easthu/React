import React, { Component } from 'react';
import {HashRouter,Link,Route,Switch,Redirect} from 'react-router-dom'
import Login from '../pages/Login/index'
import Admin from '../pages/Admin/index'
import Goods from '../pages/Goods/index'
import User from '../pages/User/index'
class Router extends Component {
    render() {
        return (
            <HashRouter>
                {/* 路由 控制地址栏改变 */}
                <Route path='/login' component={Login}></Route>
                <Route path='/admin' render={()=>{
                    return(
                        <Admin>
                            <Route path='/admin/user' component={User}></Route>
                            <Route path='/admin/goods' component={Goods}></Route>
                        </Admin>
                    )
                }}></Route>
            </HashRouter>
        );
    }
}

export default Router;