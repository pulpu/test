import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from "./App";
import Login from './pages/login'
import Dashboard from "./pages/dashboard"
import NoMatch from './pages/noMatch'

class Router extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/app" component={App} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route component={NoMatch} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;