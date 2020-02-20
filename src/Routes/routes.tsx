import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from '../components/About/aboutpage';
import HomeView from '../containers/Home/homeview';
import Notfoundpage from '../shared/Not';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={ HomeView } />
            <Route path="/about" exact component={ AboutPage } />
            <Route path="/notfound" exact component={ Notfoundpage } />
        </Switch>
    </Router>
)

export default Routes;
