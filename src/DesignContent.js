import React, { Component } from 'react';
import ReactPlayer from 'react-player';
// import './Designs.css';

class DesignContent extends Component {

  	render() {
  		var playerWidth = this.props.playerWidth;
  		var playerHeight = this.props.playerHeight;
    //   var heightComp = this.props.height - 180;
  		// if(this.props.width < 460 || heightComp < 216){
  		// 	playerWidth = 288;
    //     playerHeight = 162;
  		// }
    //   else if(this.props.width < 560 || heightComp < 270){
    //     playerWidth = 384;
    //     playerHeight = 216;
    //   }
  		// else if(this.props.width < 740 || heightComp < 360){
  		//  	playerWidth = 480;
  		//  	playerHeight = 270;
  		// }
  		// else{
  		// 	playerWidth = 640;
  		// 	playerHeight = 360;
  		// }
  		if(this.props.buyLink === "none"){
  			return (
	            <div className="Content" style={{display: this.props.display}}>
	  	    			<div className="Content-Text">
	  	    				{this.props.designText}
	  	    			</div>
	  	    			<div style={{height: playerHeight, width: playerWidth}} className="Designs-Video-Container">
	  	    				Loading Youtube Player...
	  	    				<ReactPlayer height={playerHeight} width={playerWidth} className="Designs-Video" url={this.props.vidUrl} controls/>
	  	    			</div>
	  	    			<div className="Content-Text">
	  	    				{this.props.subText}
	  	    			</div>
	  	    	</div>
	    	);
  		}
  		else if(this.props.buyLink === "default"){
  			return (
	            <div className="Content" style={{display: this.props.display}}>
	  	    			<div className="Content-Text">
	  	    				{this.props.designText}
	  	    			</div>
	  	    			<div className="Content-Text" id="Purchase-NoLink">
	  	    				If interested in purchase or samples, please inquire at: <bold style={{textDecoration: "underline"}}>emmett@hammerheadaudio.com</bold> 
	  	    			</div>
	  	    			<div style={{height: playerHeight, width: playerWidth}} className="Designs-Video-Container">
	  	    				Loading Youtube Player...
	  	    				<ReactPlayer height={playerHeight} width={playerWidth} className="Designs-Video" url={this.props.vidUrl} controls/>
	  	    			</div>
	  	    			<div className="Content-Text">
	  	    				{this.props.subText}
	  	    			</div>
	  	    	</div>
	    	);
  		}
  		else{
	    	return (
	            <div className="Content" style={{display: this.props.display}}>
	  	    			<div className="Content-Text">
	  	    				{this.props.designText}
	  	    			</div>
	  	    			<a className="Content-Text" id="Purchase-Link" href={this.props.buyLink} target="_blank">
	  	    				Purchase Here
	  	    			</a>
	  	    			<div style={{height: playerHeight, width: playerWidth}} className="Designs-Video-Container">
	  	    				Loading Youtube Player...
	  	    				<ReactPlayer height={playerHeight} width={playerWidth} className="Designs-Video" url={this.props.vidUrl} controls/>
	  	    			</div>
	  	    			<div className="Content-Text">
	  	    				{this.props.subText}
	  	    			</div>
	  	    	</div>
	    	);
	    }
  	}
}

export default DesignContent;

/*
<a href = "mailto: abc@example.com">Send Email</a>
*/