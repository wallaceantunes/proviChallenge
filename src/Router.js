import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './views/Login'
import Register from './views/Register'
import Inside from './views/Inside'

function Router() {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/cadastro' component={Register} />
            <Route exact path='/app*' component={Inside} />
        </Switch>
    )
}

export default Router;
