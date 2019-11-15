import React, { Component } from 'react';
import './items-carousel.scss';

import { withFirebase } from '../../firebase';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Slider from "react-slick";

import {
  Link
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import * as ROUTES from '../../../routes/routes.js';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';


class ItemsCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            listings: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true });

        this.unsubscribe = this.props.firebase
        .listings()
        .onSnapshot(snapshot => {
            let listings = [];
            snapshot.forEach(doc =>
                listings.push({ ...doc.data() }),
            );
            this.setState({
                listings,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        const { listings, loading } = this.state;
        const ListingsList = ({ listings }) => (
            <Slider {...settings}>
                {listings.map(listing => (
                    <Card>
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
                        <LinkContainer className="clickable" to={`${ROUTES.LISTINGS}/${listing.uid}`}>
                            <div>
                                <Card.Body>
                                    <Badge pill variant="primary">Category 1</Badge>
                                    <Badge pill variant="danger">Category 2</Badge>
                                    <Card.Title>{listing.title}</Card.Title>
                                    <Card.Text>
                                        <Row>
                                        <Col><small>{listing.location}</small></Col>
                                        <Col><small>5p, 11h</small></Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Row className="price-avg">
                                        <Col><h5>4 468,75 €</h5></Col>
                                    </Row>
                                </Card.Footer>
                            </div>
                        </LinkContainer>
                    </Card>
                ))}
            </Slider>
        );


        return (
            <Container className="app-container section-wrapper items-carousel">
                <Row>
                    <Col>
                        <h4>Latest Listings</h4>
                    </Col>
                    <Col>
                        <small><Link href="">View all</Link></small>
                    </Col>
                </Row>

                {loading && <div>Loading ...</div>}
                <ListingsList listings={listings} />

            </Container>
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
  )(ItemsCarousel);