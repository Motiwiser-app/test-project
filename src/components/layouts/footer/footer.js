import React from 'react';
import './footer.scss';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { LinkContainer } from 'react-router-bootstrap'
import * as ROUTES from '../../../routes/routes.js';

const Footer = () => (
        <Navbar className="app-container footer" sticky="bottom">
            <Container className="navbar-container">
                <Nav>Test-Project</Nav>
                <Nav>
                    <LinkContainer to={ROUTES.LANDING}>
                        <Nav.Link>Landing</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={ROUTES.SIGN_IN}>
                        <Nav.Link>Sign In</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
);

export default Footer;