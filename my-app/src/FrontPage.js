import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './css/FrontPage.css';

class FrontPage extends Component {
  render(){
    return(
      <div>
        <div className="lineargradientrainbow135 fpcontainer">
          <div className="align-item-center">
            <h1 style={{fontFamily:"RobotoMonoB", fontSize:"60px"}} >
              Club Name
            </h1>
            <h2 style={{fontFamily:"RobotoMono", fontSize:"40px"}}>
              This is about what the club is about
            </h2>
          </div>
        </div>

        <div className="fpcontainer">
          <h3 className="align-item-center"> Some stuff about the website </h3>
        </div>

        <div className="lineargradientrainbow45 fpcontainer">
          <div className="align-item-center">
            <h3 style={{fontFamily:"RobotoMonoB", fontSize:"60px"}} >
             Like what you see?
            </h3>
            <a href="/Contact">
              <h2 style={{fontFamily:"RobotoMonoB", fontSize:"40px"}}>
               Join us.
              </h2>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
