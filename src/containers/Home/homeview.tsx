import React from 'react';
import Banner from '../../components/Home/banner/banner';
import Header from '../../shared/header/Header';
import Description from '../../components/Home/description/description';
import Footer from '../../shared/footer/Footer';
import Cards from '../../components/Home/cards/cards';

const HomeView = () => (
  <div>
    <Header />
    <Banner />
    <Description />
    <Cards />
    <Footer />
  </div>
);

export default HomeView;
