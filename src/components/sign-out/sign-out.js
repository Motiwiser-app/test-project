import React from 'react';
import { withFirebase } from '../firebase';

import Button from 'react-bootstrap/Button'

const SignOutButton = ({ firebase }) => (
  <Button variant="secondary" type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);