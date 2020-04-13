import React, {Component} from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './css/ContactPage.css';
import './css/common.css';

class ContactPage extends Component {
  render(){
    return(
      <div>
        <Jumbotron className="lineargradient-rainbow135">
            <div className="my-container" >
              <h1 className="my-title-large align-item-center">
                Contact Us About Joining
              </h1>
            </div>
            <div className="my-container">
              <h3 className="my-title align-item-center">
                We'd love to have you
              </h3>
            </div>
        </Jumbotron>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ContactPage;
