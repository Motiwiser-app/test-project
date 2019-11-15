import React from 'react';
import './landing.scss';

import Search from '../layouts/search';
import ItemsCarousel from '../layouts/items-carousel';


const LandingPage = () => (
  <div>
    <Search />

    <ItemsCarousel />

  </div>
);

export default LandingPage;