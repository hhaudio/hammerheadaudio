import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Void from "./Void.js";
import Content from "./Content.js";
import MenuItem from "./MenuItem.js";

class App extends Component {
  state = {NavPage: "Home", ContentVisible: false};

  constructor(props){
    super(props);
    this.state={
      NavPage: "Home",
      ContentVisible: false
    }
  }

  navClicked(page) {
    console.log("Clicked");
    console.log(page);
    console.log(this.state.NavPage);
    if(this.state.NavPage !== page){
      this.setState({NavPage: page, ContentVisible: true});
    }
    else{
      this.setState({NavPage: "Home", ContentVisible: false});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="hhlogo.png" className="hhlogo" alt="logo" />
          <div className="hhtitle">Hammerhead Audio</div>
          <div className="hhsubtitle">Audio Hardware and Software Designs by Emmett Palaima</div>
        </div>
        <div className="Header-Bar"/>
        <div className="Menu-Bar">
          <MenuItem text="Designs" idfl="First-Item" nav={this.state.NavPage} onClick={this.navClicked.bind(this)}/>
          <MenuItem text="Music" idfl="Middle-Item" nav={this.state.NavPage} onClick={this.navClicked.bind(this)}/>
          <MenuItem text="Bio" idfl="Middle-Item" nav={this.state.NavPage} onClick={this.navClicked.bind(this)}/>
          <MenuItem text="Resume" idfl="Middle-Item" nav={this.state.NavPage} onClick={this.navClicked.bind(this)}/>
          <MenuItem text="Contact" idfl="Last-Item" nav={this.state.NavPage} onClick={this.navClicked.bind(this)}/>
        </div>
        <Void/>
        <Content isVisible={this.state.ContentVisible}/>
        <div className="Copyright">© Emmett Palaima 2017</div>
      </div>
    );
  }
}

export default App;
