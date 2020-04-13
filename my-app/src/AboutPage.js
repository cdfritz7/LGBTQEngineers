import React, {Component} from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import "./css/common.css";
import "./css/AboutPage.css";

class AboutCard extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Card style={{margin:"50px"}}>
        <Card.Header>
          <h1 className="my-title my-container">{this.props.title}</h1>
        </Card.Header>
        <Card.Body className="my-text">
          <Card.Text>
            {this.props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

class AboutPage extends Component {
  render(){
    return(
      <div>
        <Jumbotron className="lineargradient-rainbow135">
            <div className="my-container" >
              <h1 className="my-title-large align-item-center">
                Who We Are
              </h1>
            </div>
            <div className="my-container">
              <h3 className="my-title align-item-center">
                Some nice catchy line
              </h3>
            </div>
        </Jumbotron>

        <div>
          <AboutCard
            title={"Lorem Ipsum"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                  sed do eiusmod tempor incididunt ut labore et dolore magna \
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.\
                  Duis aute irure dolor in reprehenderit in voluptate velit esse\
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint\
                  occaecat cupidatat non proident, sunt in culpa qui officia\
                  deserunt mollit anim id est laborum."}
          />

          <AboutCard
            className="about-card"
            title={"Lorem Ipsum"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                  sed do eiusmod tempor incididunt ut labore et dolore magna \
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.\
                  Duis aute irure dolor in reprehenderit in voluptate velit esse\
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint\
                  occaecat cupidatat non proident, sunt in culpa qui officia\
                  deserunt mollit anim id est laborum."}
          />

          <AboutCard
            className="about-card"
            title={"Lorem Ipsum"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                  sed do eiusmod tempor incididunt ut labore et dolore magna \
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.\
                  Duis aute irure dolor in reprehenderit in voluptate velit esse\
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint\
                  occaecat cupidatat non proident, sunt in culpa qui officia\
                  deserunt mollit anim id est laborum."}
          />
        </div>
      </div>
    );
  }
}

export default AboutPage;
