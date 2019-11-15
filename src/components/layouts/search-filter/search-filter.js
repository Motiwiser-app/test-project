import React from 'react';
import './search-filter.scss';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';



// ************ //
// Range Slider //
// ************ //
import 'rc-slider/assets/index.css';
//import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Rangeslider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [0, 75000],
        };
    }

    render(){
        return(
            <div>
            <Range min={0}
                    max={100000}
                    defaultValue={this.state.value}
                    allowCross={false}
                    onChange={value=>this.setState({value})} />
            <span>{this.state.value[0]} €</span>  
            <span style={{float:"right"}}>{this.state.value[1]} €</span>  
            </div>
        )
    }
}



const SearchFilter = () => (
    <Col className="searchfilter-col">
    <Container className="searchfilter">
      <Accordion defaultActiveKey="0">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h6>Ehitus (150)</h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Form>
              {['checkbox'].map(type => (
                <div key={`category-${type}`} className="mb-3">
                  <Form.Check label="Siseviimistlus" type={type} id={`category-${type}-1`} />
                  <Form.Check label="Santehnilised tööd" type={type} id={`category-${type}-2`} />
                  <Form.Check /*disabled*/ label="Fassaaditööd" type={type} id={`category-${type}-3`} />
                  <Form.Check label="Maalritööd" type={type} id={`category-${type}-4`} />
                  <Form.Check label="Ehituskoristus" type={type} id={`category-${type}-5`} />
                </div>
              ))}
            </Form>
          </Accordion.Collapse>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h6>Only show</h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Form>
              {['checkbox'].map(type => (
                <div key={`only-show-${type}`} className="mb-3">
                  <Form.Check label="Search titles only" type={type} id={`only-show-${type}-1`} />
                  <Form.Check label="Has image" type={type} id={`only-show-${type}-2`} />
                  <Form.Check disabled label="Posted today (disabled)" type={type} id={`only-show-${type}-3`} />
                  <Form.Check label="Ending today" type={type} id={`only-show-${type}-4`} />
                </div>
              ))}
            </Form>
          </Accordion.Collapse>
      </Accordion>
      <div>
        <h6>Price range</h6>
        <hr/>
        <Rangeslider />
      </div>
      <div>
        <h6>Size (min/max)</h6>
        <hr/>
        <ButtonToolbar>
          <ToggleButtonGroup type="checkbox" defaultValue={[1]}>
            <ToggleButton variant="outline-secondary" value={1}>0-99 m2</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup type="checkbox" defaultValue={[1]}>
            <ToggleButton variant="outline-secondary" value={1}>100-199 m2</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup type="checkbox" defaultValue={[1]}>
            <ToggleButton variant="outline-secondary" value={1}>200 m2+</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup type="checkbox" defaultValue={[1]}>
            <ToggleButton variant="outline-secondary" value={1}></ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </div>
      <hr/>
      <ButtonToolbar>
        <Button variant="success">Update</Button>
        <Button variant="link">Reset filter</Button>
      </ButtonToolbar>
    </Container>
  </Col>
);

export default SearchFilter;