import React, {Component} from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";

import './css/NewsPage.css';
import './css/common.css';

class NewsCard extends Component {
  constructor(props){
    super(props);
  }

  render(){

    var colors = ['#FF6663', '#FEB144', '#FDFD97', '#9EE09E', '#9EC1CF', '#CC99C9'];
    var color = colors[this.props.color_idx % colors.length];

    var button = null;
    if(this.props.link)
      button = <a href={this.props.link} className="npbutton"><Button style={{backgroundColor:color, borderColor:color, color:"black"}}>{this.props.link_name}</Button></a>

    return (
      <Card className='npcard'>
        <Card.Header style={{backgroundColor:color}} className='my-title'>{this.props.title}</Card.Header>
        <Card.Body>
          <Card.Text className='my-text'>
            {this.props.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="npcardfooter">
            <div className='npcarddate'>{this.props.date}</div>
            <div className='npcardbutton'>{button}</div>
          </div>
        </Card.Footer>
      </Card>
    )
  }
}

class NewsPage extends Component {

  constructor(props){
    super(props);

    //pull in the news info stored in our .json file
    const data = require('./data/NewsPageData.json');
    var news = data['news'];
    this.cards = [];
    var x;

    //add the cards holding the news info to our instance variable
    for(x in news){
      let blurb = news[x];
      this.cards.push(
        <NewsCard title={blurb["title"]}
                  text={blurb["text"]}
                  date={blurb["date"]}
                  link={blurb["link"]}
                  link_name={blurb["link_name"]}
                  color_idx={x}/>
      )
    }

    //set variables for pagination
    this.cards_per_page = 5;
    this.num_pages = Math.ceil(this.cards.length/this.cards_per_page);

    this.state = {};
    this.componentDidMount = this.componentDidMount.bind(this);
    this.changeCard = this.changeCard.bind(this);
  }

  //start off on the first page
  componentDidMount(){
    this.setState({active_page: 0});
  }

  //change the shown page in this component and scroll to top of page
  changeCard(eventKey){
    window.scrollTo({top:0,left:0,behavior: 'smooth'});
    this.setState({active_page: eventKey.target.text-1});
  }

  render(){

    //get the cards on the active page
    var shown_cards = [];
    if(this.state.active_page !== null){
      var start_idx = this.state.active_page*this.cards_per_page;
      for(var i = start_idx; i < start_idx+this.cards_per_page; i++){
        shown_cards.push(this.cards[i]);
      }
    }

    //create our pagination bar
    var pagination_bar;

    if(this.num_pages > 1){
      var page_items = [];
      var parent_active_page = this.state.active_page;
      for(let i = 1; i <= this.num_pages; i++){
        page_items.push(
          <Pagination.Item
            key={i}
            onClick={this.changeCard}
            active={i-1 === this.state.active_page}>
              {i}
          </Pagination.Item>
        );
      }

      pagination_bar =
      <div className="my-container">
        <Pagination
          size="lg"
          className="align-item-center"
          variant="dark">
            {page_items}
        </Pagination>
      </div>
    }

    return(
      <div>
        <div className="npcontainer">
          {shown_cards}
        </div>
        {pagination_bar}
      </div>
    )
  }
}

export default NewsPage;
