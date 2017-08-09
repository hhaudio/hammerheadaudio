import React, { Component } from 'react';
import Music from './Music.js';
import Resume from './Resume.js';
import Bio from './Bio.js';
import Contact from './Contact.js'
import Designs from './Designs.js'
import './Content.css';
import './Contact.css';
import './Bio.css';

class Content extends Component {

  render() {
    return(
      <div>
        <Designs display={this.props.nav === "Designs" ? 'block' : 'none'} AbyssPlayer={this.props.AbyssPlayer}/>
        <Music display={this.props.nav === "Music" ? 'block' : 'none'}/>
        <Bio display={this.props.nav === "Bio" ? 'block' : 'none'}/>
        <Resume display={this.props.nav === "Resume" ? 'block' : 'none'}/>
        <Contact display={this.props.nav === "Contact" ? 'block' : 'none'}/>
      </div>
    );
  }
}

export default Content;

  /*

    render() {
    return(
      <Designs className="Designs" display={this.props.nav === "Designs" ? 'block' : 'none'} AbyssPlayer={this.props.AbyssPlayer}/>
    );
  }
  render() {
    if(this.props.nav === "Designs"){
      return(
        <Designs className="Designs" display={this.props.nav === "Designs" ? 'block' : 'none'} AbyssPlayer={this.props.AbyssPlayer}/>
      );
    }
    if(this.props.nav === "Music"){
      return(
        <div>
          <Designs display="none" AbyssPlayer={this.props.AbyssPlayer}/>
          <Music/>
        </div>
      );
    }
    if(this.props.nav === "Bio"){
      return(
        <Bio/>
      );
    }
    if(this.props.nav === "Resume"){
      return(
        <Resume/>
      );
    }
    if(this.props.nav === "Contact"){
      return(
        <Contact/>
      );
    }
    else{
      return(
        <div/>
      );
    }               
  }
  */