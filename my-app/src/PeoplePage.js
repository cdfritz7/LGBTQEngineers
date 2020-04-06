import React, {Component} from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './css/PeoplePage.css';

/*
  a card for displaying officer information and pictures
*/
class MyCard extends Component {
  constructor(props){
    super(props);
  }

  render(){

    var button = null;
    if(this.props.link)
      button = <a href={this.props.link}><Button>{this.props.link_name}</Button></a>

    return (
      <Card className="cardclass" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image}/>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.props.position}
          </Card.Subtitle>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          {button}
        </Card.Body>
      </Card>
    );
  }
}

class PeoplePage extends Component {
  render(){
    const data = require('./data/PeoplePageData.json')
    var people = data['people']
    var cards = []
    var x;

    for(x in people){
      let person = people[x];
      console.log(person);
      console.log(person["image"]);
      cards.push(
        <MyCard name={person["name"]}
                position={person["position"]}
                description={person["description"]}
                image={person["image"]}
                link={person["link"]}
                link_name={person["link_name"]}/>
      )
    }
    return(
        <div className="cardcontainer">
          {cards}
        </div>
    );
  }
}

export default PeoplePage;
