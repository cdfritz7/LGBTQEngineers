import React, {Component} from "react";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import {FaDraftingCompass} from 'react-icons/fa'
import FrontPage from "./FrontPage.js"
import AboutPage from "./AboutPage.js"
import PeoplePage from "./PeoplePage.js"
import ContactPage from "./ContactPage.js"
import NewsPage from "./NewsPage.js"

import flag from './imgs/flag.png';
import logo from './imgs/logo.png'
import './css/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { hideNav: null };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
     let currentHideNav = (window.innerWidth < 768);
     if (currentHideNav !== this.state.hideNav) {
        this.setState({hideNav: currentHideNav});
    }
  }

  render(){
    var navbar = null;
    if(this.state.hideNav){
      navbar =      <Nav>
                      <div>
                        <Nav.Link><NavLink className="text_24pt" exact to="/">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="text_18pt" to="/News">News</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="text_18pt" to="/About">About</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="text_18pt" to="/People">People</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="text_18pt" to="/Contact">Join</NavLink></Nav.Link>
                      </div>
                    </Nav>;
    }else{
      navbar =      <Nav style={{height:"7vh"}}>
                     <div className="mycontainer">
                        <Nav.Link className="align-item-center"><NavLink className="spaced_text text_18pt" to="/News">News</NavLink></Nav.Link>
                        <Nav.Link className="align-item-center"><NavLink className="spaced_text text_18pt" to="/About">About</NavLink></Nav.Link>
                        <Nav.Link className="align-item-center"><NavLink className="spaced_text text_24pt" exact to="/"><img src={logo} width="80px" height="120px" alt="Home" /></NavLink></Nav.Link>
                        <Nav.Link className="align-item-center"><NavLink className="spaced_text text_18pt" to="/Contact">Join</NavLink></Nav.Link>
                        <Nav.Link className="align-item-center"><NavLink className="spaced_text text_18pt" to="/People">People</NavLink></Nav.Link>
                     </div>
                    </Nav>;
    }

    return (
      <HashRouter>
        <div style={{width:"100%"}}>
          <BrowserRouter basename="/">
            <Navbar bg='light' expand="md" sticky="top">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {navbar}
            </Navbar.Collapse>
            </Navbar>

            <div className="content">
              <Route exact path="/" component={FrontPage}/>
              <Route path="/News" component={NewsPage}/>
              <Route path="/About" component={AboutPage}/>
              <Route path="/Contact" component={ContactPage}/>
              <Route path="/People" component={PeoplePage}/>
            </div>
          </BrowserRouter>
        </div>
      </HashRouter>
    );
  }
}

export default App;
