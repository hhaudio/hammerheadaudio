import React, { Component } from 'react';
import Music from './Music.js';
import Resume from './Resume.js';
import Bio from './Bio.js';
import Contact from './Contact.js'
import Designs from './Designs.js'
import Art from './Art.js'
import './Content.css';
import './Contact.css';
import './Bio.css';

class Content extends Component {

  render() {
    return(
      <div>
        <Designs width={this.props.width} height={this.props.height} display={this.props.nav === "Designs" ? 'block' : 'none'}/>
        <Art width={this.props.width} height={this.props.height} display={this.props.nav === "Art" ? 'block' : 'none'}/>
        <Music width={this.props.width} height={this.props.height} display={this.props.nav === "Music" ? 'block' : 'none'}/>
        <Bio width={this.props.width} display={this.props.nav === "Bio" ? 'block' : 'none'}/>
        <Resume display={this.props.nav === "Resume" ? 'block' : 'none'}/>
        <Contact display={this.props.nav === "Contact" ? 'block' : 'none'}/>
      </div>
    );
  }
}

export default Content;
/*
display={this.props.nav === "Designs" ? 'block' : 'none'}
*/