import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.scss';

import store from '../../store';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/dist/locale-data/en'; // locale-data for en
import '@formatjs/intl-pluralrules/dist/locale-data/et'; // locale-data for et
import '@formatjs/intl-pluralrules/dist/locale-data/ru'; // locale-data for ru
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en'; // Add locale data for en
import '@formatjs/intl-relativetimeformat/dist/locale-data/et'; // Add locale data for et
import '@formatjs/intl-relativetimeformat/dist/locale-data/ru'; // Add locale data for ru
import et_translations from "../../assets/translations/et.json";
import en_translations from "../../assets/translations/en.json";
import ru_translations from "../../assets/translations/ru.json";


import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';
import LandingPage from '../landing';
import Listings from '../listings';
import AddNewListingPage from '../add-new-listing';
import SignUpPage from '../sign-up';
import SignInPage from '../sign-in';
import PasswordForgetPage from '../password-forget';
import HomePage from '../home';
import AccountPage from '../account';
import AdminPage from '../admin';

import TestDb from '../test-db';

 
import * as ROUTES from '../../routes/routes.js';
import { withAuthentication } from '../session';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, fas, far)



const UPDATE_LOCALES = 'UPDATE_LOCALES'

class App extends React.Component {
  handleLoadlLocales = () => {
    store.dispatch({
      type: UPDATE_LOCALES,
      payload: {
        et: et_translations,
        en: en_translations,
        ru: ru_translations,
      },
    })
  }

  componentDidMount() {
    this.handleLoadlLocales();
  }

  render() {
    return (
      <Router className="app-router">
        <Navigation />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.LISTINGS} component={Listings} />
          <Route path={ROUTES.ADD_NEW_LISTING} component={AddNewListingPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.TESTDB} component={TestDb} />
        <Footer />
      </Router>
    )
  }
    
}


export default withAuthentication(App);