import React, {Component} from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './css/ContactPage.css';
import './css/common.css';

class ContactCard extends Component {
  constructor(props){
    super(props);
  }

  render(){

    var colors = ['#FF6663', '#FEB144', '#FDFD97', '#9EE09E', '#9EC1CF', '#CC99C9'];
    var color = colors[this.props.color_idx % colors.length];

    return(
      <div className="contactcard">
        <Card>
          <Card.Header style={{backgroundColor:color, textAlign: "center"}}
                       className="my-title">
                       {this.props.title}
          </Card.Header>
          <Card.Body>
            <Card.Title style={{textAlign: "center"}}
                        className="my-text">
                        {this.props.text}
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

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

        <div className="ccontainer">
          <ContactCard title="Email Us" text="this.my@email.com" color_idx="1"/>
          <ContactCard title="Follow Us" text="lorem ipsum" color_idx="2"/>
          <ContactCard title="Text Us?" text="lorem ipsum" color_idx="3"/>
        </div>
      </div>
    );
  }
}

export default ContactPage;
