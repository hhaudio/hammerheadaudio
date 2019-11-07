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

var ne1Text = "The Nuisance Engine (NE-1) is a handmade, 9V battery powered, analog pocket synthesizer unit. Modeled after a circuit that emulates the sounds of a V8 motor, the Nuisance Engine is an abrasive noise box with a mind of its own, capturing the coveted quality of unpredictable yet clear results from user input. The signal flow consists of a square wave oscillator exciting a variable frequency resonator filter, which then passes through a combination lowpass filter / distortion circuit that cranks in incredible amounts of gain as the filter cutoff decreases, creating a decidedly smushy, crushy end result. This all runs into an audiophile unfriendly Class B amplifier circuit so cheap that it ducks the power supply of the entire device in the process of driving the built-in speaker, leading to some weird, chaotic feedback magic that makes the NE-1 the Nuisance it is. Perfect for irritating your friends and enemies on the go...";
var ne1Vid = 'https://youtu.be/uStgD_TsTdg';
var ne1Link = "https://igg.me/at/ne1/x/22645203#/";
var ne1Sub = "Enclosure Art By Suzanne Yeremyan";

var pn1Text = "Essentially a pocket jackhammer, the Puncher Noid (PN-1) is an lfo controlled solenoid boxing glove powered off two 9 Volt Batteries. Additional features include wall wart power input, as well as an external trigger input, which allows the glove to be controlled by external waveforms from modular synths, etc..."
var pn1Vid = 'https://youtu.be/Pm1rNjtYY48';
var pn1Link = "default";

var pn2Text = "The Pincer Noids (PN-2) is a battery powered pocket lobster, featuring two clacking solenoid claws. Turning the rotary encoder control produces sequenced clacking, while pressing the button fires both at once. Also included is a trigger input, which allows the claws to be controlled by externally generated waveforms from modular synths, etc...";
var pn2Vid = 'https://youtu.be/MkUJVbHedGs';
var pn2Link = "default";

var srmText = 'Say something about SharkBite Ring Modulator';
var srmVid = 'https://www.youtube.com/watch?v=eb6wKSP1cwg';
var srmLink = "none";

class Designs extends Component {
    constructor(props){
      super(props);

      this.state = {
        design: "Nuisance Engine"
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

    inquireDiv(text){
      return (
      <div>
          {text}
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
            <div className="DesignBar">
              <DesignMenu text="Nuisance Engine" idfl="First-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
  	    			<DesignMenu text="Ghost Fax" idfl="Middle-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
              <DesignMenu text="Hax II" idfl="Middle-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
              <DesignMenu text="Pincer Noids" idfl="Middle-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
              <DesignMenu text="Puncher Noid" idfl="Middle-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
              <DesignMenu text="CigSynth" idfl="Middle-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
              <DesignMenu text="The Abyss" idfl="Last-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
            </div>
            <DesignContent designText={abyssText} vidUrl={abyssVid} subText={abyssSub} buyLink={abyssLink} display={this.state.design === "The Abyss" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
            <DesignContent designText={this.gfaxDiv()} subText={gFaxSub} vidUrl={gFaxVid} buyLink={gFaxLink} display={this.state.design === "Ghost Fax" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
	    	    <DesignContent designText={haxText} vidUrl={haxVid} subText={haxSub} buyLink={haxLink} display={this.state.design === "Hax II" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
            <DesignContent designText={this.cigDiv()} vidUrl={cigVid} buyLink={cigLink} buyLinkText="Build Manual" buy display={this.state.design === "CigSynth" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
            <DesignContent designText={ne1Text} vidUrl={ne1Vid} subText={ne1Sub} buyLink={ne1Link} buyLinkText="Preorder Now" display={this.state.design === "Nuisance Engine" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
            <DesignContent designText={pn1Text} vidUrl={pn1Vid} buyLink={pn1Link} display={this.state.design === "Puncher Noid" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
            <DesignContent designText={pn2Text} vidUrl={pn2Vid} buyLink={pn2Link} display={this.state.design === "Pincer Noids" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
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