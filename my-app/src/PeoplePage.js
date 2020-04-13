import React, {Component} from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './css/common.css';
import './css/PeoplePage.css';

/*
  a card for displaying officer information and pictures
*/
class PersonCard extends Component {
  constructor(props){
    super(props);
  }

  render(){

    var colors = ['#FF6663', '#FEB144', '#FDFD97', '#9EE09E', '#9EC1CF', '#CC99C9'];

    var my_color = colors[this.props.idx%colors.length];
    var button;
    if(this.props.link)
      button =
      <a href={this.props.link}>
        <Button style={{color:"black", borderColor: "black", backgroundColor: my_color}}>
          {this.props.link_name}
        </Button>
      </a>

    return (
      <Card style={{borderColor:"black"}} className="pcardclass">
        <Card.Img variant="top" src={this.props.image}/>
        <Card.Header
          style={{backgroundColor:my_color, borderColor:"black"}}
          className="my-title">
          {this.props.name}
        </Card.Header>
        <Card.Body>
          <Card.Subtitle style={{fontSize:"20px"}} className="my-text text-muted">
            {this.props.position}
          </Card.Subtitle>
          <Card.Text className="my-text">
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
      cards.push(
        <PersonCard name={person["name"]}
                position={person["position"]}
                description={person["description"]}
                image={person["image"]}
                link={person["link"]}
                link_name={person["link_name"]}
                idx={x}/>
      )
    }

    return(
        <div className="pcardcontainer">
          {cards}
        </div>
    );
  }
}

export default PeoplePage;
