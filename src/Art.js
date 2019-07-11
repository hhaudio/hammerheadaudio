import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Designs.css';
import DesignContent from './DesignContent.js';
import DesignMenu from './DesignMenu.js';

var ndaText = 'Please note: Much of my work for MeowWolf falls under an NDA (Non Discloure Agreement) 🤫 Therefore I am not able to discuss specific project details prior to the opening of this installation.';

var waterText = 'Say something about the water tower';
var waterVid = 'https://www.youtube.com/watch?v=Hr8m814zwwc';
var waterLink = "none";

var artLinkText = "Website Here";

var vegasText = 'For MeowWolf Las Vegas I am working as part of a small team, providing all sound technology needs for a massive, multi-story, immersive, psychadelic art environment. My work includes all aspects of audio technology required for the installion, including musical robotics, generative audio, spatial audio, interactive audio, audio systems architecture, circuit board design, and creative direction on audio technology for projects. Mine is a highly diverse role in which I work with almost every aspect of audio required for an immersive space, from creative concepting to electronics design to programming to installation and beyond.';
var vegasVid = 'https://www.youtube.com/watch?v=meflEvC64xw';
var vegasLink = "https://lasvegas.meowwolf.com/";

var denverText = 'For MeowWolf Denver I am working as part of a small team, providing all sound technology needs for a massive, multi-story, immersive, psychadelic art environment. My work includes all aspects of audio technology required for the installion, including musical robotics, generative audio, spatial audio, interactive audio, audio systems architecture, circuit board design, and creative direction on audio technology for projects. Mine is a highly diverse role in which I work with almost every aspect of audio required for an immersive space, from creative concept to electronics design to programming to installation and beyond.';
var denverVid = 'https://www.youtube.com/watch?v=MMamj5-f-xs';
var denverLink = "https://denver.meowwolf.com/";

class Art extends Component {
    constructor(props){
      super(props);

      this.state = {
        design: "MeowWolf Las Vegas"
      }
    }


    ndaDiv(text){
      return (
        <div>
          {ndaText}
          <br/>
          <br/>
          {text}
        </div>
        );
    } 

    navClicked(page) {
      console.log("Something clicked!");
      this.setState({design: page});
    }

  	render() {
  		var playerWidth;
  		var playerHeight;
      var heightComp = this.props.height - 180;

  		if(this.props.width < 460 || heightComp < 216){
  			playerWidth = 288;
        playerHeight = 162;
  		}
      else if(this.props.width < 560 || heightComp < 270){
        playerWidth = 384;
        playerHeight = 216;
      }
  		else if(this.props.width < 740 || heightComp < 360){
  		 	playerWidth = 480;
  		 	playerHeight = 270;
  		}
  		else{
  			playerWidth = 640;
  			playerHeight = 360;
  		}
    	return (
			   <div style={{display: this.props.display}} className="Content-Container">
	    		<div className="Content-Text-Box">
            <div className="DesignBar">
              <DesignMenu text="MeowWolf Las Vegas" idfl="First-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
              <DesignMenu text="MeowWolf Denver" idfl="Last-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
            </div>
            <DesignContent designText={waterText} vidUrl={waterVid} buyLink={waterLink} display={this.state.design === "HoER Water Tower" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
            <DesignContent designText={this.ndaDiv(vegasText)} subText='Video Credit: MeowWolf Entertainment' vidUrl={vegasVid} buyLink={vegasLink} buyLinkText={artLinkText} display={this.state.design === "MeowWolf Las Vegas" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
	    	    <DesignContent designText={this.ndaDiv(denverText)} subText='Video Credit: MeowWolf Entertainment' vidUrl={denverVid} buyLink={denverLink} buyLinkText={artLinkText} display={this.state.design === "MeowWolf Denver" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
          </div>
	    	</div>
    	);
  	}
}

export default Art;
/*
{this.ndaDiv(denverText)}
<DesignMenu text="HoER Water Tower" idfl="First-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
*/