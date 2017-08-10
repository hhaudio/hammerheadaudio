import React, { Component } from 'react';
//import logo from './logo.svg';
//https://epaudio.github.io/hammerheadaudio/
import './App.css';
import Void from "./Void.js";
import Content from "./Content.js";
import MenuItem from "./MenuItem.js";
import ReactPlayer from 'react-player';

class App extends Component {

  state = {NavPage: "Home", width: 0, height: 0};

  constructor(props){
    super(props);
    this.state={
      NavPage: "Home",
      width: window.innerWidth,
      height: window.innerHeight
    }
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  navClicked(page) {
    if(this.state.NavPage !== page){
      this.setState({NavPage: page});
    }
    else{
      this.setState({NavPage: "Home"});
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
        <Content width={this.state.width} height={this.state.height} nav={this.state.NavPage}/>
        <div className="Copyright">© Emmett Palaima 2017, Page Made With ReactJS</div>
      </div>
    );
  }
}

        //<div className="Logo-Frame"/>
        //<img src="hhlogo.png" className="hhlogo" alt="logo" />

export default App;
