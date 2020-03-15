import React from 'react';
import Details from '../../components/thedetails/Details/details';
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import Contact from '../../shared/contact/contact';


const DetailsView = () => (
  <div>
    <Header />
    <Details />
    <Contact />
    <Footer />
  </div>
);

export default DetailsView;