import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Designs.css';
import DesignContent from './DesignContent.js';
import DesignMenu from './DesignMenu.js';

var abyssText = 'The Abyss is a plugin designed around the idea of stretching a reverb algorithm to the point of breaking. Built using eight parallel delay lines, a major feature is the ability to modulate parameters separately for each line, creating spaces that subtley (or not so subtley) shift and ripple beneath your ears. It also includes such features as envelope follower modulation, built in distortion and room sizes so large that individual delay taps become audible, making it useful both for spacialization and as a powerful sound design tool.';
var abyssVid = 'https://www.youtube.com/watch?v=Hr8m814zwwc';
var abyssLink = "none";

var gFaxText = 'Say something about Ghost Fax';
var gFaxVid = 'https://www.youtube.com/watch?v=MHV_YR-PuSQ';
var gFaxLink = "https://www.dwarfcraft.com/store/p120/Ghost-Fax.html#/";

var haxText = 'Say something about Hax II';
var haxVid = 'https://www.youtube.com/watch?v=a4AHNNwF5xo';
var haxLink = "https://www.dwarfcraft.com/store/p124/HAX2.html#/";

var cigText = 'Say something about CigSynth';
var cigVid = 'https://www.youtube.com/watch?v=eb6wKSP1cwg';
var cigLink = "none";

var srmText = 'Say something about SharkBite Ring Modulator';
var srmVid = 'https://www.youtube.com/watch?v=eb6wKSP1cwg';
var srmLink = "none";

class Designs extends Component {
    constructor(props){
      super(props);

      this.state = {
        design: "Ghost Fax"
      }
    }

    navClicked(page) {
      console.log("Something clicked!");
      console.log(this.props.width);
      console.log(this.props.height);
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
            <div className="DesignBar" style={{minWidth:"480px"}}>
  	    			<DesignMenu text="Ghost Fax" idfl="First-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
              <DesignMenu text="Hax II" idfl="Middle-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
              <DesignMenu text="The Abyss" idfl="Middle-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
              <DesignMenu text="CigSynth" idfl="Last-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
            </div>
            <DesignContent designText={abyssText} vidUrl={abyssVid} buyLink={abyssLink} display={this.state.design === "The Abyss" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
            <DesignContent designText={gFaxText} vidUrl={gFaxVid} buyLink={gFaxLink} display={this.state.design === "Ghost Fax" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
	    	    <DesignContent designText={haxText} vidUrl={haxVid} buyLink={haxLink} display={this.state.design === "Hax II" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
            <DesignContent designText={cigText} vidUrl={cigVid} buyLink={cigLink} display={this.state.design === "CigSynth" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
            <DesignContent designText={srmText} vidUrl={srmVid} buyLink={srmLink} display={this.state.design === "SRM-1" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
          </div>
	    	</div>
    	);
  	}
}

export default Designs;
/*
<DesignMenu text="SRM-1" idfl="Last-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
          <div className="Content-Text-Box">
            <div className="Content-Title" style={{left: "250px"}}>The Returning of a One Who Must Be Loved</div>
              <div className="Content" style={{display: "none"}}>
                <div className="Content-Text">
                  The Returning of a One Who Must Be Loved is a multi-media installation designed in collaboration with Lane Shi, which symbolically tells the story of the end of the world, beginning with the awakening of an ancient sea monster and culminating with the tears of a lost child.
                </div>
                <div style={{height: playerHeight, width: playerWidth}} className="Designs-Video-Container">
                  Loading Youtube Player...
                  <ReactPlayer height={playerHeight} width={playerWidth} className="Designs-Video" url='https://www.youtube.com/watch?v=f7oJFlACQvo&feature=youtu.be' controls/>
                </div>
            </div>
          </div>
*/