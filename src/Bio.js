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
			    			Emmett Palaima (Hammerhead Audio) is an artist, musician, programmer, and electrical engineer living in Santa Fe, New Mexico. His artwork focuses on the use of technology to create sound pieces which are grounded in physicality rather than musicality, and which celebrate the inherent beauty of the technical processes involved in creating this result. He employs a variety of techniques to this end, including audio illusions, non-traditional methods of sound creation, and unwieldy analog / digital signal flow systems. He also designs a variety of sound objects under the Hammerhead Audio moniker, including guitar pedals, synthesizers, and motorized pocket shellfish.

			    		<br/>
			    		<br/>
			    			In his professional endeavors, Emmett works at the Meow Wolf Creative Studios in Santa Fe, New Mexico, where he is part of a small team building out audio technology needs for Meow Wolf's future installations in Denver, Las Vegas, and beyond. In this role he fulfills an diverse array of responsibilities, ranging from technical problem solving, to creative direction, to high level systems architecture, to hands-on installation of tech in sculptural elements. Additionally, he has worked as a designer for the guitar pedal companies Dwarfcraft and J. Rockett, and currently has two commercially available designs on the market: the Ghost Fax Phase Computer and the Hax II Ring Modulator / Filter Pedal.
				
						<br/>
						<br/>
							He is also an active performer, playing guitar in Elizabeth Colour Wheel, an internationally touring band signed to The Flenser, on which they released their debut LP 'Nocebo' in March of 2019. In Elizabeth Colour Wheel, Emmett uses his knowledge of effects and audio signal flow to sculpt his guitar tone in relation to the rest of the band, creating a layer of crackling, spacious high-end which sits atop the thick midrange of the second guitarist and the deep low-end of the bass, in order to create a sonic stack that sounds massive, yet maintains clarity. He has also performed in a variety of other contexts, including pop-up performances at the House of Eternal Return installation in Santa Fe, New Mexico, and performance of an electronic opera entitled 'The Sound of Dreaming' at Moogfest 2017.
					</div>
		    	</div>
		    	</div>
		    );
		}
}

export default Bio;