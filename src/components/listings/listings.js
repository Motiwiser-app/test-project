import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './listings.scss';

import { withFirebase } from '../firebase';
import { compose } from 'recompose';

import { LinkContainer } from 'react-router-bootstrap'
import * as ROUTES from '../../routes/routes.js';

import Search from '../layouts/search';
import SearchFilter from '../layouts/search-filter';
import ListingsList from './listings-list';
import ListingItem from '../listing-item';

//import Locales from '../../utils/locales';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


const Listings = () => (
  <div>
    <Switch>
      <Route exact path={ROUTES.LISTING_DETAILS} component={ListingItem} />
      <Route exact path={ROUTES.LISTINGS} component={ListingsList} />
    </Switch>
  </div>
);



export default compose(
  withFirebase,
)(Listings);