import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutView from '../containers/About/aboutview';
import AccommodationView from '../containers/Accommodation/accommodationview';
import HomeView from '../containers/Home/homeview';
import Notfoundpage from '../shared/Not';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={ HomeView } />
            <Route path="/about" exact component={ AboutView } />
            <Route path="/accommodate" exact component={ AccommodationView } />
            <Route path="/notfound" exact component={ Notfoundpage } />
        </Switch>
    </Router>
)

export default Routes;
