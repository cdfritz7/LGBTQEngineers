import React, {Component} from "react";

import Card from "react-bootstrap/Card";

class NewsCard extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Card>
        <Card.Header>News Title</Card.Header>
        <Card.Body>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Card.Text>
        </Card.Body>
        <Card.Footer>{this.props.date}</Card.Footer>
      </Card>
    )
  }
}

class NewsPage extends Component {

  render(){

    var card_list = []
    for(var i = 0; i < 10; i++){
      card_list.push(<NewsCard date={22}/>);
    }
    //read in news JSON

    return(
      <div>
        {card_list}
      </div>
    )
  }
}

export default NewsPage;
