import React from 'react';
import { connect } from 'react-redux';
import './navigation.scss';
import {//FormattedMessage, 
   FormattedHTMLMessage} from 'react-intl';
import LocaleSwitcher from '../locale-switcher'

import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import SignOutButton from '../../sign-out';
import * as ROUTES from '../../../routes/routes.js';
import * as ROLES from '../../../utils/roles';



const Navigation = ({ authUser }) => 
  authUser ? (
    <NavigationAuth authUser={authUser} />
  ) : (
    <NavigationNonAuth />
  );



const NavigationAuth = ({ authUser }) => (
  <Navbar fixed="top" expand="lg" bg="light">
    <Container className="navbar-container">
      <LinkContainer to={ROUTES.LANDING}>
        <Navbar.Brand>
          <FormattedHTMLMessage id="navbar.brand" defaultMessage="Test-Project" description="Brand name in header Navbar"/>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <LinkContainer to={ROUTES.LANDING}>
            <Nav.Link>Landing</Nav.Link>
          </LinkContainer>
          <LinkContainer to={ROUTES.HOME}>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to={ROUTES.ACCOUNT}>
            <Nav.Link>Account</Nav.Link>
          </LinkContainer>
          {!!authUser.roles[ROLES.ADMIN] && (
            <LinkContainer to={ROUTES.ADMIN}>
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
          )}
          <SignOutButton />
          <LinkContainer to={ROUTES.ADD_NEW_LISTING}>
            <Button variant="success">Post a Project</Button>
          </LinkContainer>        
        </Nav>
        <LocaleSwitcher />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar fixed="top" expand="lg" bg="light">
    <Container className="navbar-container">
      <LinkContainer to={ROUTES.LANDING}>
        <Navbar.Brand>
          <FormattedHTMLMessage id="navbar.brand" defaultMessage="Test-Project" description="Brand name in header Navbar"/>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <LinkContainer to={ROUTES.LANDING}>
            <Nav.Link>Landing</Nav.Link>
          </LinkContainer>
          <LinkContainer to={ROUTES.SIGN_IN}>
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
          <LinkContainer to={ROUTES.ADD_NEW_LISTING}>
            <Button variant="success">Post a Project</Button>
          </LinkContainer>
        </Nav>
        <LocaleSwitcher />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);


const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});
export default connect(mapStateToProps)(Navigation);