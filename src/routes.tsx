import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './components/About/aboutpage';
import HomeView from './containers/Home/homeview';

const Routes = () => (
    <Router basename="nile-safari-lodge">
        <Route path="/" exact component={ HomeView } />
        <Route path="/about" exact component={ AboutPage } />
    </Router>
);

export default Routes;
