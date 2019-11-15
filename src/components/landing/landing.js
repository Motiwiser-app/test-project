import React from 'react';
import './landing.scss';

import Search from '../layouts/search';
import ItemsCarousel from '../layouts/items-carousel';
import CategoryCards from '../layouts/category-cards';
import ItemsLocation from '../layouts/items-location';

//import Locales from '../../utils/locales';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const LandingPage = () => (
  <div>
    <Search />

    <ItemsCarousel />

  </div>
);

export default LandingPage;