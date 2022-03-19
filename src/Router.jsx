import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import Explore from './component/Explore'
import Profile from './component/Profile'
import Home from './component/Home'

class RouterFun extends Component {
    render() {
    return (
            <Switch>
                <Route exact path="/" component={Explore } />
                <Route exact path="/Home" component={Home } />
                <Route exact path="/Profile" component={Profile} />
                <Route><div>Not found</div></Route>
            </Switch>
    )
    }
}

export default RouterFun