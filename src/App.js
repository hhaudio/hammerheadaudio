import React, { Component } from 'react';
import './App.css';
import Void from "./Void.js";
import Content from "./Content.js";
import MenuItem from "./MenuItem.js";
import ReactPlayer from 'react-player'; 

var headerPos;
var navPos;

class App extends Component {

  state = {NavPage: "Home", width: 0, height: 0};

  constructor(props){
    super(props);
    this.state={
      NavPage: "Designs",
      width: window.innerWidth,
      height: window.innerHeight
    }
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions();
    document.body.style.overflowY = "hidden";
    document.body.style.transformOrigin = "0 0";
    document.body.style.transform = {scale: .5};
  }

  updateDimensions() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    this.setState({width: window.innerWidth, height: window.innerHeight});
    if(this.state.width > 900){
      headerPos = "fixed";
      navPos = "fixed";
      document.body.style.overflowX = "hidden";
    }
    else if(this.state.width > 610){
      headerPos = "absolute";
      navPos = "fixed";
      document.body.style.overflowX = "auto";
    }
    else{
      headerPos = "absolute";
      navPos = "absolute";
      document.body.style.overflowX = "auto";
    }
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
        <div className="App-header" style={{position: headerPos}}>
          <img src="hhlogo.png" className="hhlogo" alt="logo" />
          <div className="hhtitle">Hammerhead Audio</div>
          <div className="hhsubtitle">Audio Hardware and Software Designs by Emmett Palaima</div>
        </div>
        <div className="Header-Bar"/>
        <div className="Menu-Bar" style={{position: navPos}}>
          <MenuItem text="Designs" idfl="First-Item" nav={this.state.NavPage} onClick={this.navClicked.bind(this)}/>
          <MenuItem text="Art" idfl="Middle-Item" nav={this.state.NavPage} onClick={this.navClicked.bind(this)}/>
          <MenuItem text="Music" idfl="Middle-Item" nav={this.state.NavPage} onClick={this.navClicked.bind(this)}/>
          <MenuItem text="Bio" idfl="Middle-Item" nav={this.state.NavPage} onClick={this.navClicked.bind(this)}/>
          <MenuItem text="Contact" idfl="Middle-Item" nav={this.state.NavPage} onClick={this.navClicked.bind(this)}/>
          <a className="Menu-Divider" id="Last-Item" href="EmmettPalaima_Resume.pdf" type="application/pdf" target="_blank">
            <div className="Menu-Item" id="Last-Item">Resume</div>
          </a>
        </div>
        <Void/>
        <Content width={this.state.width} height={this.state.height} nav={this.state.NavPage}/>
        <div className="Copyright">© Emmett Palaima 2017, Page Made With React, Source on <a href="https://github.com/epaudio/hammerheadaudio" target="_blank">Github</a></div>
      </div>
    );
  }
}

export default App;

          /*
          <MenuItem text="Resume" idfl="Middle-Item" nav={this.state.NavPage} onClick={this.navClicked.bind(this)}/>
          */
