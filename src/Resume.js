import React, { Component } from 'react';
import "./Resume.css"

class Resume extends Component {
  render() {
    return (
    	<div style={{display: this.props.display}} className="Content-Container" id="CC-Duller">
    		<div className="Content-Text-Box" id="CT-Black" style={{paddingRight: "20px"}}>
    			<div className="Resume-Header">
    				<div>Emmett Palaima Resume</div>
    				<a className="Resume-Text" id="LinkedIn" style={{left: "0px"}} href="EmmettPalaima_Resume.pdf" download>Download PDF</a>
    			</div>
    			<div className="Resume-Section">
    				<div className="Resume-Section-Header">Professional Summary</div>
    				<div className="Resume-Text">Artist, musician, programmer and electrical engineer, specializing in the creative application of
audio technology. Experience in installation art, product design, and performance. Excellent
technical, problem solving, and creative skills.</div>
    			</div>
    			<div className="Resume-Section">
    				<div className="Resume-Section-Header">Skills</div>
	    				<div className="Resume-Text">Electrical Engineering</div>
	    				<div className="Resume-Text">Circuit Board Design</div>
	    				<div className="Resume-Text">Software and Firmware Programming</div>
	    				<div className="Resume-Text">Digital Signal Processing</div>
	    				<div className="Resume-Text">Digital Fabrication</div>
	    				<div className="Resume-Text">Creative Audio Design</div>
	    				<div className="Resume-Text">Sound Design</div>
	    				<div className="Resume-Text">Guitar Performance</div>
	    				<div className="Resume-Text">Music Composition</div>
	    				<div className="Resume-Text">User Interface Design</div>
    			</div>
    			<div className="Resume-Section">
    				<div className="Resume-Section-Header">Work Experience</div>

    				<div className="Resume-Entry-Header">Sound Technologist - Meow Wolf [04/18-Present]</div>
	    			<div className="Resume-Text">Provide for audio technology needs of large scale immersive art installations, including:</div>
	    			<ul className="Resume-List">
	    				<li className="Resume-List-Text">Creative direction, interactive and generative audio, musical robotics, composition and
sound design</li>
	    				<li className="Resume-List-Text">Collaborative work with other artists</li>
	    				<li className="Resume-List-Text">Circuit board design</li>
	    				<li className="Resume-List-Text">Software and firmware programming</li>
	    				<li className="Resume-List-Text">Work on projects for Meow Wolf Denver, Meow Wolf Las Vegas, and the House of Eternal Return</li>
	    			</ul>

	    			<div className="Resume-Entry-Header">Freelance Guitar Pedal Designer - Dwarfcraft Devices, J. Rockett Audio Designs [06/16-Present]</div>
	    			<div className="Resume-Text">Design of guitar effects pedals, including:</div>
	    			<ul className="Resume-List">
	    				<li className="Resume-List-Text">Two commercially released designs: The 'Ghost Fax Phase Computer' and the 'Haxx II Ring Modulator / Filter Pedal'</li>
	    				<li className="Resume-List-Text">Mixed signal circuit board design</li>
						<li className="Resume-List-Text">Firmware implementation of DSP (Digital Signal Processing) algorithms</li>
						<li className="Resume-List-Text">Creative design of audio effects</li>
	    			</ul>

    				<div className="Resume-Entry-Header">Guitarist - Elizabeth Colour Wheel [01/14-Present]</div>
	    			<div className="Resume-Text">Play guitar with the internationally touring band Elizabeth Colour Wheel, signed to The Flenser record label.</div>

	    			<div className="Resume-Entry-Header">The Sound of Dreaming - Nona Hendryx, Dr. Richard Boulanger [01/17-08/17]</div>
	    			<div className="Resume-Text">Took part in the production and performance of an electronic opera entitled 'The Sound of Dreaming', which premiered at Moogfest 2017 with a repeat performance at Mass MoCA.</div>

	    			<div className="Resume-Entry-Header">Electronic Production and Design Department Tutor - Berklee College of Music [01/17-06/17]</div>
	    			<div className="Resume-Text">Worked as tutor helping students with all aspects of the Electronic Production and Design curriculum, including audio production software, audio programming, and sound design.</div>
    			</div> 

    			<div className="Resume-Section">
    				<div className="Resume-Section-Header">Education</div>
    				<div className="Resume-Entry-Header">Bachelor of Music - Electronic Production and Design - Berklee College of Music, Boston, MA [05/17]</div>
    				<ul className="Resume-List">
	    				<li className="Resume-List-Text">Designed a reverb plug-in using JUCE/C++ as thesis project</li>
						<li className="Resume-List-Text">Graduated Summa Cum Laude, with a Minor in Acoustics and Electronics</li>
	    			</ul>
    			</div>			
    		</div>
    	</div>
    	);
	}
}

export default Resume;    	