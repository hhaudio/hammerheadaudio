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
  	if(this.props.nav === "Designs"){
  		return(
  			<Designs/>
  		);
  	}
  	if(this.props.nav === "Music"){
  		return(
  			<Music/>
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

}

export default Content;