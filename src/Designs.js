import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Designs.css';
import DesignContent from './DesignContent.js';
import DesignMenu from './DesignMenu.js';

var abyssText = 'The Abyss is a plugin designed around the idea of stretching a reverb algorithm to the point of breaking. Built using eight parallel delay lines, a major feature is the ability to modulate parameters separately for each line, creating spaces that subtley (or not so subtley) shift and ripple beneath your ears. It also includes such features as envelope follower modulation, built in distortion, and room sizes so large that individual delay taps become audible, making it useful both for spacialization and as a powerful sound design tool.';
var abyssVid = 'https://www.youtube.com/watch?v=Hr8m814zwwc';
var abyssLink = "default";
var abyssSub = "Video by Emmett Palaima. All sound design for this video was done using The Abyss."

var gFaxText = "The Ghost Fax Phase Computer is a digital phaser pedal, described by Nick Reinhart of Tera Melos as the \"coolest phaser [he has] ever heard\" . It feature extreme resonance, a variety of modulation sources (Wave Shaping LFO, Manual Fixed Frequency, and Envelope Up/Down), as well as a variable number of poles (1-32), allowing for tones ranging from the warm and dirty analog range straight up to harsh, clangorous digital sound design.";
var gFaxVid = 'https://www.youtube.com/watch?v=MHV_YR-PuSQ';
var gFaxLink = "https://www.dwarfcraft.com/store/p120/Ghost-Fax.html#/";
var gFaxSub = "Video Credit: Knobs Pedal Reviews"

var haxText = 'The Haxx II is a combination ring modulator and filter pedal designed for Dwarfcraft Devices. It features sine wave and square wave ring modulation, low pass and bandpass filter modes, as well as envelope follower modulation up to audio rate, allowing for a wide variety of warbly, noisy and chaotic tones. It is currently available through several major music retailers.';
var haxVid = 'https://www.youtube.com/watch?v=a4AHNNwF5xo';
var haxLink = "https://www.dwarfcraft.com/store/p124/HAX2.html#/";
var haxSub = "Video Credit: Eric Merrow"

var cigText = "The CigSynth OWKY-1 (One Won\'t Kill Ya!) is a handmade, battery-powered pocket synthesizer, housed inside of a custom designed cigarette package. It consists of a sawtooth wave oscillator and resonant lowpass filter, with an exposed circuit board for capacitive touch pitchbending. It also includes a built-in speaker and a 3.5mm output, making it perfect for annoying both your friends and your enemies on the go. It is currently available both as a pre-built unit and as a kit (with online instructions) by special order, and was sold in a limited run at the Currents New Media Festival Gift Shop. Artwork was designed in collaboration with Alice Jackson.";
var cigVid = 'https://www.youtube.com/watch?v=eb6wKSP1cwg';
var cigLink = "https://github.com/hhaudio/CigSynth";

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

    gfaxDiv(){
      return (
        <div>
          The Ghost Fax Phase Computer is a phaser pedal designed for Dwarfcraft Devices, and described by Nick Reinhart of Tera Melos as  
          <a style={{color: "Navy"}} href="https://www.instagram.com/p/BsBrFTwBc0D/?hl=en" target="_blank"> "[the] coolest phaser [he has] ever heard." </a> It features extreme resonance, a variety of modulation sources (Wave Shaping LFO, Manual Fixed Frequency, and Envelope Up / Down), a modulation pause button, as well as a variable number of poles (1 - 32), allowing for tones ranging from warm and dirty analog, straight up to harsh, clangorous digital sound design. It is currently available through several major music retailers.
        </div>
        );
    } 

    cigDiv(){
      return (
        <div>
          {cigText}
          <div id="Purchase-NoLink">
            If interested in purchase or samples, please inquire at: <bold style={{textDecoration: "underline"}}>emmett@hammerheadaudio.com</bold> 
          </div>
        </div>
        );
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
            <DesignContent designText={abyssText} vidUrl={abyssVid} subText={abyssSub} buyLink={abyssLink} display={this.state.design === "The Abyss" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
            <DesignContent designText={this.gfaxDiv()} subText={gFaxSub} vidUrl={gFaxVid} buyLink={gFaxLink} display={this.state.design === "Ghost Fax" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
	    	    <DesignContent designText={haxText} vidUrl={haxVid} subText={haxSub} buyLink={haxLink} display={this.state.design === "Hax II" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
            <DesignContent designText={this.cigDiv()} vidUrl={cigVid} buyLink={cigLink} buyLinkText="Build Manual" buy display={this.state.design === "CigSynth" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
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