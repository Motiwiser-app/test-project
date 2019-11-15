import React from 'react';
import './make-offer-box.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Jumbotron from 'react-bootstrap/Jumbotron';


const MakeOfferBox = () => (
  <Col className="make-offer-box-col">
    <Container className="make-offer-box">
      <h4>Tee oma pakkumine</h4>
      <small>Aega jäänud<span className="space-before">6h 31m</span></small>
      <Form>
        <Form.Group controlId="formGroupOfferSum">
          <Form.Label><small>Summa</small></Form.Label>
          <Form.Control type="email" placeholder="EUR" />
        </Form.Group>
        <Form.Group controlId="formGroupOfferFluxuation">
          <Form.Label><small>Hinnakõikumine</small></Form.Label>
          <Form.Control type="password" placeholder="%" />
        </Form.Group>
        <small>Ettemaks</small>
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={0}>Yes</ToggleButton>
            <ToggleButton value={1}>No</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
        <small>Sisaldab käibemaksu</small>
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={0}>Yes</ToggleButton>
            <ToggleButton value={1}>No</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
        <Button variant="success" size="lg" block>
          Tee pakkumine
        </Button>

      </Form>
      <Jumbotron fluid>
          <Container>
            <Row>
              <Col md="8"><p className="gray-title">Pakkumisi tehtud</p></Col>
              <Col md="4"><p className="left-bold">1</p></Col>
            </Row>
            <Row>
              <Col md="8"><p className="gray-title">Keskmine pakkumine</p></Col>
              <Col md="4"><p className="left-blue-bold">2000 €</p></Col>
            </Row>

            <Button className="blue-bold" variant="link" block>Link</Button>
          </Container>
        </Jumbotron>
    </Container>
  </Col>
);

export default MakeOfferBox;