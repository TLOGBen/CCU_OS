import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

const App = require('./modules/App');
const View = require('./modules/View');

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={View.Home}/>
            <Route path='Home' component={View.Home}/>
            <Route path='About' component={View.About}/>
            <Route path='Appliances' component={View.Appliances}/>
            <Route path='Danger' component={View.Danger}/>
            <Route path='Generic' component={View.Generic}/>
            <Route path='/*' component={View.NotFound}/>
        </Route>
    </Router>
), document.getElementById('app'));
