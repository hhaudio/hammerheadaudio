import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Content.css';

class Designs extends Component {
	
  /*shouldComponentUpdate(){
    return false;
  }*/
	
  	render() {
    	return (
			<div style={{display: this.props.display}} className="Content-Container">
	    		<div className="Content-Text-Box">
	    			<div className="Designs-Title">The Abyss</div>
	    			<div className="Designs-Text">The Abyss is a plugin designed around the idea of stretching a reverb algorithm to the point of breaking. 
	    			<br/>Including such features as 
	    			decorrealted modulation of the internal delay line parameters, 
	    			envelope follower modulation, 
	    			built in distortion 
	    			and room sizes so large that individual delay taps become audible,
	    			it is useful both for spacialization and as a powerful sound design tool.
	    			</div>
	    			<div className="Designs-Video-Container">
	    				Loading Youtube Player...
	    				{this.props.AbyssPlayer}
	    			</div>
	    		</div>
	    	</div>
    	);
  	}
}

export default Designs;

//<ReactPlayer className="Designs-Video" url='https://www.youtube.com/watch?v=Hr8m814zwwc' controls/>