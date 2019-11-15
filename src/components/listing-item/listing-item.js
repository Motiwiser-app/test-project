import React, { Component } from 'react';
import './listing-item.scss';

import { withFirebase } from '../firebase';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Search from '../layouts/search';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class ListingItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };
    }

    componentDidMount() {
        if (!this.props.listing) {
            this.setState({ loading: true });
        }
        this.unsubscribe = this.props.firebase
            .listing(this.props.match.params.id)
                .onSnapshot(snapshot => {
                this.props.onSetListing(snapshot.data());

                this.setState({
                    loading: false,
                });
            });
    }

    componentWillUnmount() {
        this.unsubscribe && this.unsubscribe();
    }

    render() {
        const { listing } = this.props;
        const { loading } = this.state;

        return (
            <div>
                <Search />

                <Container className="app-container section-wrapper listing-item">
                    {loading && <div>Loading ...</div>}
                    {listing && (
                        <Row className="justify-content-md-center">

                            <Col>
                                <Row>
                                    <Col md="8">
                                        <h2>{listing.title}<FontAwesomeIcon className="add-to-favorites" icon={['fas', 'heart']} /></h2>
                                        <small>Listingu lõpp 5p, 11h</small>
                                    </Col>
                                    <Col md="4">
                                        <small>Roy S.</small>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col md="2"><small>Location</small></Col>
                                    <Col md="10"><h6>{listing.location}</h6></Col>
                                </Row>
                                <Row>
                                    <Col md="2"><small>Tööde kestvus</small></Col>
                                    <Col md="10"><h6>{listing.work_start_date} - {listing.work_end_date}</h6></Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col>
                                        <h4>Description</h4>
                                        {listing.description}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4>Related documents</h4>
                                        <div className="document-item">
                                            <FontAwesomeIcon className="file-icon" icon={['far', 'file-pdf']} />
                                            <div><p>Document 1</p><small>Size 1.3mb</small></div>
                                        </div>
                                        <div className="document-item">
                                            <FontAwesomeIcon className="file-icon" icon={['far', 'file-pdf']} />
                                            <div><p>Document 1</p><small>Size 1.3mb</small></div>
                                        </div>
                                        <div className="document-item">
                                            <FontAwesomeIcon className="file-icon" icon={['far', 'file-pdf']} />
                                            <div><p>Document 1</p><small>Size 1.3mb</small></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4>Location</h4>
                                        <p style={{color: "#767676"}}>Exact location information is provided after a winnig confirmed</p>
                                        <p>NB! Siin on asukoha täpsustav kirjeldus. Näiteks peale suutr puud kolmas maja paremal.</p>
                                    </Col>
                                </Row>
                                

                            </Col>

                        </Row>
                    )}
                </Container>
            </div>
        );
    }
}



const mapStateToProps = (state, props) => ({
    listing: (state.listingState.listings || {})[props.match.params.id],
  });
  
  const mapDispatchToProps = dispatch => ({
    onSetListing: (listing, uid) => dispatch({ type: 'LISTING_SET', listing, uid }),
  });
  
  export default compose(
    withFirebase,
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
  )(ListingItem);