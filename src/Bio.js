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
			    	<div className="Content-Text" style={{marginTop: "5px"}}>
			    			Emmett Palaima is a musician, creative audio technologist, and developer of audio hardware and software. He currently works at the Meow Wolf Creative Studios in Santa Fe, New Mexico, where he is part of a small team building out audio technology needs for Meow Wolf's future installations in Denver, Las Vegas, and beyond. In this role he fulfills an incredibly diverse array of responsibilities, ranging from technical problem solving, to creative direction, to high level systems architecture, to hands-on installation of tech in sculptural elements. He has also worked as a designer for the guitar pedal companies Dwarfcraft and Jay Rockett, and currently has two commercially available designs on the market: the Ghost Fax Phase Computer and the Hax II Ring Modulator / Filter Pedal.
			    		<br/>
			    		<br/>
			    			As an audio technologist, Emmett embraces this diversity of roles, and enjoys finding the creativity in whatever challenges he faces. When designing audio products or tech for installations, he thinks of the process as designing a physical or digital object with which others will interact, and which will in turn shape their creative output. As a sound designer, he seeks to find new ways to create given effects or to modify existing concepts, either through code or circuitry, in order to arrive organically at unique and unexpected results. He is also attracted to the concept of immersion, and particularly enjoys working on installations wherein audio can be felt as a physical presence, achieved through the use of such effects as audio illusions and spatialization. 				
						<br/>
						<br/>
							He is also an active performer, and plays guitar in Elizabeth Colour Wheel, a nationally touring band signed to The Flenser, on which they released their debut LP 'Nocebo' in March of 2019. In Elizabeth Colour Wheel, Emmett uses his knowledge of effects and audio signal flow to sculpt his guitar tone in relation to the rest of the band, creating a layer of crackling, spacious high-end which sits atop the thick midrange of the second guitarist and the deep low-end of the bass, in order to create a sonic stack that sounds massive, yet maintains clarity. He has also performed in a variety of other contexts, including pop-up performances at the House of Eternal Return installation in Santa Fe, New Mexico, and performance of an electronic opera entitled 'The Sound of Dreaming' at Moogfest 2017.
					</div>
		    	</div>
		    	</div>
		    );
		}
}

export default Bio;