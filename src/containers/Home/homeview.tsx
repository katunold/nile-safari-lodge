import React from 'react';
import Banner from '../../components/Home/banner/banner';
import Header from '../../shared/header/Header';
import Description from '../../components/Home/description/description';
import Footer from '../../shared/footer/Footer';
import Cards from '../../components/Home/cards/cards';
import Testimony from '../../components/Home/testimonials/testimonials';

const HomeView = () => (
  <div>
    <Header />
    <Banner />
    <Description />
    <Cards />
    <Testimony />
    <Footer />
  </div>
);

export default HomeView;
