import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './listings.scss';

import { withFirebase } from '../firebase';
import { compose } from 'recompose';

import * as ROUTES from '../../routes/routes.js';

import ListingsList from './listings-list';
import ListingItem from '../listing-item';


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