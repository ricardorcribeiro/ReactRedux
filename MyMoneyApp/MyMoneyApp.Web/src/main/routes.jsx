import React from 'react'
import {Route, Router, IndexRoute ,Redirect, hashHistory} from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../bilingCycle/bilingCycle'



export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path='billingCycles' component={BillingCycle}/>
        </Route>
        {/* <Route path='/' component={Dashboard}/> */}
        <Redirect from='*' to='/'/>
    </Router>
)