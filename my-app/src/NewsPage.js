import React, {Component} from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import './css/NewsPage.css';

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
        <Card.Header style={{backgroundColor:color}} className='npcardtitle'>{this.props.title}</Card.Header>
        <Card.Body>
          <Card.Text className='npcardtext'>
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

  render(){

    const data = require('./data/NewsPageData.json');
    var news = data['news'];
    var cards = [];
    var x;

    for(x in news){
      let blurb = news[x];
      cards.push(
        <NewsCard title={blurb["title"]}
                  text={blurb["text"]}
                  date={blurb["date"]}
                  link={blurb["link"]}
                  link_name={blurb["link_name"]}
                  color_idx={x}/>
      )
    }

    return(
      <div className="npcontainer">
        {cards}
      </div>
    )
  }
}

export default NewsPage;
