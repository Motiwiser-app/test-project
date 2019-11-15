import React from 'react';
import './search.scss';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import { LinkContainer } from 'react-router-bootstrap'
import * as ROUTES from '../../../routes/routes.js';


const Search = () => (
    <Card className="search-card">
        <Card.Img className="search-card-img" src={require("./placeholder-img.jpeg")} />
        <Card.ImgOverlay>
        <Container className="app-container">
            <Tabs defaultActiveKey="home">
            <Tab eventKey="home" title="Listings">
                <Form>
                <Form.Row>
                    <Col sm={6} md={3}>
                    <Dropdown className="full-width">
                        <Dropdown.Toggle variant="outline-secondary">
                        Any Category
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>
                    <Col sm={6} md={4}>
                    <Form.Control placeholder="Job description" />
                    </Col>
                    <Col sm={6} md={3}>
                    <Dropdown className="full-width">
                        <Dropdown.Toggle variant="outline-secondary">
                        Any Category
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>
                    <Col sm={6} md={2}>
                        <LinkContainer to={ROUTES.LISTINGS}>
                            <Button className="full-width" variant="success">Search</Button>
                        </LinkContainer>
                    </Col>
                </Form.Row>
                </Form>
            </Tab>
            <Tab eventKey="profile" title="Hinna kalkulatsioon">
                <p>Hinna kalkulatsioon</p>
                <p>Rida</p>
                <p>Rida</p>
                <p>Rida</p>
                <p>Rida</p>
                <p>Rida</p>
                <p>Viimane rida</p>
            </Tab>
            </Tabs>
        </Container>
        </Card.ImgOverlay>
    </Card>
);

export default Search;