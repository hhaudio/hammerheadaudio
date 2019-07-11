import React, { Component } from 'react';

class Bio extends Component {
  render() {

  	var hsFloat = this.props.width > 700 ? "left" : "none";

    return (
    			<div style={{display: this.props.display}} className="Content-Container">
		    	<div className="Content-Text-Box">
		    	<div className="Content-Title">Biography</div>
			    	<div className="Bio-Headshot-Container" style={{float: hsFloat}}>
			    		<img style={{width: "100%"}} src="EmmettArrow.jpg" className="Bio-Headshot" alt="Headshot"/>
			    	</div>
			    	<div className="Content-Text" style={{marginTop: "15px"}}>
			    		Born in Austin, Texas, Emmett Palaima is a guitarist and developer of audio hardware and software. He is a recent graduate of Berklee College of Music, where his thesis project was the design of a reverb plugin, and now works as a design engineer for the effects pedal companies Dwarfcraft Devices and J. Rockett Audio Designs. 
			    		<br/>
			    		<br/>
						As an audio developer he is passionate about finding unorthodox ways to use existing DSP and synthesis techniques, in order to create sounds and effects that have never been heard before, as well as working in-depth with low-level code that allows him to fine-tune the nuances of a sound. Furthermore he is very much inspired by the idea that the creation of an instrument or effect is equivalent to the design of a creative experience, which will influence the art, music and sound design that it is used for. 
						<br/>
						<br/>
						He is also an active performer, and playing with the bands Elizabeth Colour Wheel and Shark Rock, as well as taking part in the production of an electronic opera entitled “The Sound of Dreaming”, starring Nona Hendrix and Dr. Richard Boulanger, with performances at Moogfest and Mass MoCA. 
					</div>
		    	</div>
		    	</div>
		    );
		}
}

export default Bio;