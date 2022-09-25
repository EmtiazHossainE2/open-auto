import React from 'react';
import Footer from '../../Components/Shared/Footer/Footer.jsx';
import Navbar from '../../Components/Shared/Navbar/Navbar.jsx';
import Banner from './Banner/Banner.jsx';
import Feature from './Feature/Feature.jsx';

const Home = () => {
  return (
    <div className='pt-5'>
      <Navbar/>
      <Banner/>
      <Feature/>
      <Footer/>
    </div>
  );
};

export default Home;