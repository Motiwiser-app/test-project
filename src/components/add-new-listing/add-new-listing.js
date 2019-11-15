import React, { Component } from 'react';
import app from 'firebase/app';
import './add-new-listing.scss';


import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../session';

import ImageUpload from '../layouts/image-upload'

import Container from 'react-bootstrap/Container';


class AddNewListingPage extends Component {

    constructor() {
        super();
        this.state = {
            title: "",
            categories: [],
            location: "",
            description: "",
            date_created: "",
            date_modified: "",
            start_date: "",
            end_date: "",
            work_start_date: "",
            work_end_date: "",
            owner_name: "",
            owner_pic_url: "",
        };
    }
    

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addListing = e => {
        e.preventDefault();
        const db = app.firestore();
        const auth = app.auth();
        const userUid = auth.currentUser.uid;

        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection("listings").add({
            title: this.state.title,
            categories: [],
            location: this.state.location,
            description: this.state.description,
            date_created: this.state.date_created,
            date_modified: this.state.date_modified,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            work_start_date: this.state.work_start_date,
            work_end_date: this.state.work_end_date,
            owner_id: userUid,
            owner_name: this.state.owner_name,
            owner_pic_url: this.state.owner_pic_url,
        });

        
        this.setState({
            title: "",
            categories: [],
            location: "",
            description: "",
            date_created: "",
            date_modified: "",
            start_date: "",
            end_date: "",
            work_start_date: "",
            work_end_date: "",
            owner_name: "",
            owner_pic_url: "",
        });
    };

    render() {
        return (
            <div>
                <Container className="app-container section-wrapper add-new-listing">
                    <p>add new listing</p>
                    <form onSubmit={this.addListing} >
                        <label for="title">Title:&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            onChange={this.updateInput}
                            value={this.state.title}
                        /><br/>
                        <label for="location">Location:&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            onChange={this.updateInput}
                            value={this.state.location}
                        /><br/>
                        <label for="description">Description:&nbsp;&nbsp;</label>
                        <textarea
                            type="text"
                            name="description"
                            placeholder="Description"
                            onChange={this.updateInput}
                            value={this.state.description}
                        /><br/>
                        <label for="date_created">Date created (filled automatically):&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            name="date_created"
                            placeholder="Date created (filled automatically)"
                            onChange={this.updateInput}
                            value={this.state.date_created}
                        /><br/>
                        <label for="date_modified">Date modified (filled automatically):&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            name="date_modified"
                            placeholder="Date modified (filled automatically)"
                            onChange={this.updateInput}
                            value={this.state.date_modified}
                        /><br/>
                        <label for="start_date">Active from date:&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            name="start_date"
                            placeholder="Active from date"
                            onChange={this.updateInput}
                            value={this.state.start_date}
                        /><br/>
                        <label for="end_date">Expiration date:&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            name="end_date"
                            placeholder="Expiration date"
                            onChange={this.updateInput}
                            value={this.state.end_date}
                        /><br/>
                        <label for="work_start_date">Work start date:&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            name="work_start_date"
                            placeholder="Work start date"
                            onChange={this.updateInput}
                            value={this.state.work_start_date}
                        /><br/>
                        <label for="work_end_date">Work end date:&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            name="work_end_date"
                            placeholder="Work end date"
                            onChange={this.updateInput}
                            value={this.state.work_end_date}
                        /><br/>
                        {/* <label for="owner_id">Owner ID:&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            name="owner_id"
                            placeholder="Owner ID"
                            onChange={this.updateInput}
                            value={this.state.owner_id}
                        /><br/> */}
                        <label for="owner_name">Owner name:&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            name="owner_name"
                            placeholder="Owner name"
                            onChange={this.updateInput}
                            value={this.state.owner_name}
                        /><br/>
                        <label for="owner_pic_url">Owner Picture URL:&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            name="owner_pic_url"
                            placeholder="Owner Picture URL"
                            onChange={this.updateInput}
                            value={this.state.owner_pic_url}
                        /><br/>
                        <ImageUpload/><br/><br/>
                        <button type="submit">Submit</button>
                    </form>
                </Container>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    authUser: state.sessionState.authUser,
});
const condition = authUser => !!authUser;
export default compose(
    connect(mapStateToProps),
    withEmailVerification,
    withAuthorization(condition),
)(AddNewListingPage);