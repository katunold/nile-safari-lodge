import React from 'react';
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import Facility from '../../components/Facilities/index';
import Contacts from '../../shared/contact/contact';

const FacilitiesView = () => {
    return (
        <div>
            <Header />
            <Facility />
            <Contacts />
            <Footer />
        </div>
    )
};

export default FacilitiesView;
