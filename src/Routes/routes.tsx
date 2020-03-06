import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from '../containers/Home/homeview';
import AboutView from '../containers/About/aboutview';
import Notfoundpage from '../shared/Not';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={ HomeView } />
            <Route path="/about" exact component={ AboutView } />
            <Route path="/notfound" exact component={ Notfoundpage } />
        </Switch>
    </Router>
)

export default Routes;
