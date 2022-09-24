import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar.jsx';
import Banner from './Banner/Banner.jsx';
import Feature from './Feature/Feature.jsx';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Feature/>
    </div>
  );
};

export default Home;