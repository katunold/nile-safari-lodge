import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutView from '../containers/About/aboutview';
import GalleryView from '../containers/Gallery/galleryview';
import DetailsView from '../containers/Details/detailsview';
import FacilitiesView from '../containers/Facilities/facilitiesview';

import ActivitiesView from '../containers/Activities/activitiesview';
import AccommodationView from '../containers/Accommodation/accommodationview';
import HomeView from '../containers/Home/homeview';
import Notfoundpage from '../shared/Not';
// import Footer from '../shared/footer/Footer';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={ HomeView } />
            <Route path="/about" exact component={ AboutView } />
            <Route path="/accommodate" exact component={ AccommodationView } />
            <Route path="/gallery" exact component={ GalleryView } />
            <Route path="/details" exact component={ DetailsView } />
            <Route path="/activities" exact component={ ActivitiesView } />
            <Route path="/facilities" exact component={ FacilitiesView } />
            <Route path="/notfound" exact component={ Notfoundpage } />
        </Switch>
        {/* <Footer/> */}
    </Router>
)

export default Routes;
