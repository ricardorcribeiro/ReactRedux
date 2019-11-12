import React from 'react'
import {Route, Router, Redirect, hashHistory} from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../bilingCycle/bilingCycle'



export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/billingCycles' component={BillingCycle}/>
        <Redirect from='*' to='/'/>
    </Router>
)