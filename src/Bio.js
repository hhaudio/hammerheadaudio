import React, { Component } from 'react';

class Bio extends Component {
  render() {
    return (
    			<div style={{display: this.props.display}} className="Content-Container">
		    	<div className="Content-Text-Box">
		    	<div className="Content-Title">Bio</div>
		    	<img src="headshot.jpg" className="Bio-Headshot" alt="Headshot"/>
		    	<div className="Content-Text">
		    		Born in Austin, Texas, Emmett Palaima is a guitarist and developer of audio hardware and software. He is a recent graduate of Berklee College of Music, where his thesis project was the design of a reverb plugin, and now works as a design engineer for the effects pedal companies Dwarfcraft Devices and Jay Rockett. He is also an active performer, and playing with the bands Elizabeth Colour Wheel and Shark Rock. 
				</div>
		    	</div>
		    	</div>
		    );
		}
}

export default Bio;