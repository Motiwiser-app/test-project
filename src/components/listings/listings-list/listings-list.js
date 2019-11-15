import React, { Component } from 'react';
import './listings-list.scss';

import { withFirebase } from '../../firebase';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { LinkContainer } from 'react-router-bootstrap'
import * as ROUTES from '../../../routes/routes.js';

import Search from '../../layouts/search';

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



class ListingsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }



  componentDidMount() {

    if (!this.props.listings.length) {
      this.setState({ loading: true });
    }

    this.unsubscribe = this.props.firebase
    .listings()
    .onSnapshot(snapshot => {
      let listings = [];

      snapshot.forEach(doc =>
        listings.push({ ...doc.data(), uid: doc.id }),
      )

      this.props.onSetListings(listings);

      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
      this.unsubscribe();
  }

  render() {
    const { listings } = this.props;
    const { loading } = this.state;

      const Listings = ({ listings }) => (

        <div>

          {listings.map(listing => (
            <Card className="listings-card">
              <Carousel interval={null} fade={true}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("./placeholder-img.jpeg")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>First slide label</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("./placeholder-img.jpeg")}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <p>Second slide label</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("./placeholder-img.jpeg")}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <p>Third slide label</p>
                    </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Row>
                  <Col md={8}>
                    <Badge pill variant="primary">ID: 1: Ehitus</Badge>
                    <Badge pill variant="danger">Haljastus</Badge>
                    <LinkContainer className="clickable" to={`${ROUTES.LISTINGS}/${listing.uid}`}>


                      <Card.Title>{listing.title}</Card.Title>
                        
                    </LinkContainer>
                    <Card.Text>
                      <Row>
                        <Col><small>{listing.location}</small></Col>
                        <Col><small>{listing.end_date}</small></Col>
                        <Col><small>ID: {listing.uid}</small></Col>
                      </Row>
                      <Row>
                        <Col>{listing.description}</Col>
                      </Row>
                    </Card.Text>
                  </Col>
                  <Col className="listings-item-footer" md={4}>
                    <Row>
                      <Col>
                        <h6>Roy S.</h6>
                        <small>14 reviews</small>
                        <p><small>kuvaks siia pildi asemel näiteks reitingut ja lemmikutesse lisamise võimalust</small></p>
                      </Col>
                    </Row>
                    <Row className="make-an-offer">
                      <Col>
                        <small>6 offers</small>
                        <h5>4 468,75 €</h5>
                        <LinkContainer className="clickable" to={`${ROUTES.LISTINGS}/${listing.uid}`} >
                          <Button variant="success">Make an offer</Button>
                        </LinkContainer>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}

        </div>
      );


        return (
          <div>
            <Search />
        
            <Container className="app-container section-wrapper items-carousel">
              <Row className="justify-content-md-center">
        
        
                <Col>
                  <Row>
                    <Col><h4>Showing <span className="results-number">1,586</span> results</h4></Col>
                    <Col>
                      <ButtonToolbar className="float-right">
                        <Dropdown>
                          <Dropdown.Toggle variant="link">
                            NEWEST
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Oldest</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Ending soon</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                          <Dropdown.Toggle variant="link">
                            Layout (icon)
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Layout1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Layout2</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </ButtonToolbar>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <ButtonToolbar className="listings-ordering-filter">
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                          <ToggleButton variant="link" value={1}>Top Picks</ToggleButton>
                          <ToggleButton variant="link" value={2}>Latest</ToggleButton>
                          <ToggleButton variant="link" value={3}>Ending soon</ToggleButton>
                          <ToggleButton variant="link" value={4}>Project price</ToggleButton>
                        </ToggleButtonGroup>
                      </ButtonToolbar>
                    </Col>
                  </Row>

                  {loading && <div>Loading ...</div>}
                  <Listings listings={listings} />

                  </Col>
                </Row>
              </Container>

            </div>
        );



    }
}


const mapStateToProps = state => ({
  listings: Object.keys(state.listingState.listings || {}).map(key => ({
    ...state.listingState.listings[key],
    uid: key,
  })),
});

const mapDispatchToProps = dispatch => ({
  onSetListings: listings => dispatch({ type: 'LISTINGS_SET', listings }),
});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(ListingsList);