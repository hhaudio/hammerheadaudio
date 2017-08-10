import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Content.css';

class Designs extends Component {
	
  /*shouldComponentUpdate(){
    return false;
  }*/

  	render() {
  		var playerWidth;
  		var playerHeight;

  		if(this.props.width < 740 || this.props.height < 480){
  		 	playerWidth = 384;
  		 	playerHeight = 216;
  		}
  		else{
  			playerWidth = 640;
  			playerHeight = 360;
  		}
    	return (
			<div style={{display: this.props.display, minWidth: "464px" , minHeight: "226px"}} className="Content-Container">
	    		<div className="Content-Text-Box">
	    			<div className="Designs-Title">The Abyss</div>
	    			<div className="Designs-Text">The Abyss is a plugin designed around the idea of stretching a reverb algorithm to the point of breaking. 
	   				Built using eight parallel delay lines, a major feature is the ability to modulate parameters separately for each line,
	   				creating spaces that subtley (or not so subtley) shift and ripple beneath your ears. 
	   				It also includes such features as 
	    			envelope follower modulation, 
	    			built in distortion 
	    			and room sizes so large that individual delay taps become audible,
	    			making it useful both for spacialization and as a powerful sound design tool.
	    			</div>
	    			<div style={{height: playerHeight, width: playerWidth}} className="Designs-Video-Container">
	    				Loading Youtube Player...
	    				<ReactPlayer height={playerHeight} width={playerWidth} className="Designs-Video" url='https://www.youtube.com/watch?v=Hr8m814zwwc' controls/>
	    			</div>
	    		</div>
	    	</div>
    	);
  	}
}

export default Designs;

//<ReactPlayer className="Designs-Video" url='https://www.youtube.com/watch?v=Hr8m814zwwc' controls/>