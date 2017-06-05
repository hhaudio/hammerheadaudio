import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Designs extends Component {
  shouldComponentUpdate(){
    return false;
  }
	
  	render() {
    	return (
			<div className="Content-Container">
	    		<div className="Content-Text-Box">
	    			<div className="Designs-Title">The Abyss</div>
	    			<div className="Designs-Text">The Abyss is an Augmented Reverb Plugin...</div>
	    			<div className="Designs-Video-Container">
	    				Loading Youtube Player...
	    				<ReactPlayer className="Designs-Video" url='https://www.youtube.com/watch?v=Hr8m814zwwc' controls/>
	    			</div>
	    		</div>
	    	</div>
    	);
  	}
}

export default Designs;