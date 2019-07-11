import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Designs.css';
import DesignContent from './DesignContent.js';
import DesignMenu from './DesignMenu.js';

var ndaText = 'This is under NDA 🤫';

var waterText = 'Say something about the water tower';
var waterVid = 'https://www.youtube.com/watch?v=Hr8m814zwwc';
var waterLink = "none";

var vegasText = 'Say something about Vegas';
var vegasVid = 'https://www.youtube.com/watch?v=MHV_YR-PuSQ';
var vegasLink = "none";

var denverText = 'Say something about Denver';
var denverVid = 'https://www.youtube.com/watch?v=a4AHNNwF5xo';
var denverLink = "none";

class Art extends Component {
    constructor(props){
      super(props);

      this.state = {
        design: "HoER Water Tower"
      }
    }


    ndaDiv(text){
      return (
        <div>
          {ndaText}
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
            <div className="DesignBar" style={{minWidth:"650px"}}>
  	    			<DesignMenu text="HoER Water Tower" idfl="First-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
              <DesignMenu text="MeowWolf Las Vegas" idfl="Middle-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
              <DesignMenu text="MeowWolf Denver" idfl="Last-Item" nav={this.state.design} onClick={this.navClicked.bind(this)}/>
            </div>
            <DesignContent designText={waterText} vidUrl={waterVid} buyLink={waterLink} display={this.state.design === "HoER Water Tower" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
            <DesignContent designText={this.ndaDiv(vegasText)} vidUrl={vegasVid} buyLink={vegasLink} display={this.state.design === "MeowWolf Las Vegas" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
	    	    <DesignContent designText={this.ndaDiv(denverText)} subText='Photo Credit: Kate Russel' vidUrl={denverVid} buyLink={denverLink} display={this.state.design === "MeowWolf Denver" ? 'block' : 'none'} playerWidth={playerWidth} playerHeight={playerHeight}/>
          </div>
	    	</div>
    	);
  	}
}

export default Art;
/*
{this.ndaDiv(denverText)}
*/