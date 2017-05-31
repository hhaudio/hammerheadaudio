import React, { Component } from 'react';
import "./Resume.css"

class Resume extends Component {
  render() {
    return (
    		<div className="Content-Text-Box" id="CT-Black">
    			<div className="Resume-Header">
    				<div>Emmett Palaima Resume</div>
    				<a className="Resume-Download" href="epalaima_resume.pdf" download>Download PDF</a>
    			</div>
    			<div className="Resume-Section">
	    			<div className="Resume-Section-Header">Work Experience</div>
	    			<div className="Resume-Entry-Header">Design Engineer and Programmer at Dwarfcraft Devices [09/16-Present]</div>
	    			<div className="Resume-Text">Work remotely as a programmer and hardware engineer on design of effects pedals and synthesizers, including:</div>
	    			<ul className="Resume-List">
	    				<li className="Resume-List-Text">Design and programming of modules for Dwarfcraft’s flagship modular synthesis system, including a wave-shaping oscillator and a complex control signal generator.</li>
	    				<li className="Resume-List-Text">Design of digital components for integration into larger analog designs, including a wave-shaping LFO for use in an analog phase-shifter pedal</li>
	    				<li className="Resume-List-Text">Skills Engaged: C, Microcontroller Programming, KiCad, Electrical Engineering, Sound Design, Communication</li>
	    			</ul>	    			
	    			<div className="Resume-Entry-Header">Berklee Electronic Production and Design Department Tutor [01/17-07/17]</div>
	    			<div className="Resume-Text">Worked as a tutor for the Electronic Production and Design (EPD) Department at Berklee College of Music including:</div>
	    			<ul className="Resume-List">
	    				<li className="Resume-List-Text">Tutoring students in the EPD major in all areas of the curriculum, including use of Logic, ProTools and Ableton, as well as programming in Max/MSP, C and Csound.</li>
	    				<li className="Resume-List-Text">Tutoring first semester Berklee Students in concepts taught in music technology core curriculum including the use of Garageband and Reason. </li>
	    				<li className="Resume-List-Text">Skills Engaged: Logic, Garageband, Ableton, Pro Tools, Reason, Max/MSP, C, Csound, Communication, Instructional Skills</li>
	    			</ul>	    
	    			<div className="Resume-Entry-Header">Programmer, Web Developer and Hardware Engineer at Point Motion [09/16-07/17]</div>			
	    			<div className="Resume-Text">Worked on the development of Point Motion, a motion controlled music platform for music therapy, including:</div>
	    			<ul className="Resume-List">
	    				<li className="Resume-List-Text">Designing and programming audio features for the application, including effects rack with custom reverb, filter, delay and chorus effects. </li>
	    				<li className="Resume-List-Text">Designing and programming a data tracking backend for the application, which allows therapists to track their patients progress remotely.</li>
	    				<li className="Resume-List-Text">Designing and programming a web based front end for data tracker</li>
	    				<li className="Resume-List-Text">Analog and digital design of a hardware controller for use with the application, and programming of the interface for communication between the application and the controller</li>
	    				<li className="Resume-List-Text">Leading a team of interns in projects relating to hardware design</li>    				
	    				<li className="Resume-List-Text">Skills Engaged: C++ (Including JUCE), JavaScript, React, Golang, SQL, Python, Linux, Electrical Engineering, Kicad, Communication, Team Leadership</li>
	    			</ul>
	    			<div className="Resume-Entry-Header">Design/Production Internship at Dwarfcraft Devices [06/16-09/16]</div>
	    			<div className="Resume-Text">Worked as a paid design intern at Dwarfcraft Devices, including:</div>
	    			<ul className="Resume-List">
	    				<li className="Resume-List-Text">Beginning programming and design of modular synthesis project</li>
	    				<li className="Resume-List-Text">Soldering and wiring effects pedals from schematic diagram in production line</li>
	    				<li className="Resume-List-Text">Testing and repairing malfunctioning pedals returned by customers</li>
	    				<li className="Resume-List-Text">Skills Engaged: C, Microcontroller Programming, KiCad, Electrical Engineering, Sound Design, Soldering, Communication</li>
	    			</ul>

	    			<div className="Resume-Entry-Header">Experimental Music Reviewer at MXDWN [10/15-03/16]</div>
    				<div className="Resume-Text">Provided critical reviews of current experimental music albums for entertainment website MXDWN, including a review of David Bowie’s final album, Blackstar</div>
    				<div className="Resume-Entry-Header">Guitarist at Mother’s Café and Garden Restaurant [09/12-06/16]</div>
    				<div className="Resume-Text">Provided background music for patrons at Mother’s Café and Garden, a local vegetarian restaurant, four nights a week.</div>
    				<div className="Resume-Entry-Header">Counselor at The Fantastic Magic Camp [06/09-06/12]</div>
    				<div className="Resume-Text">Worked as a counselor at a non-profit summer camp specializing in inclusivity of special needs children, including:</div>
    				<ul className="Resume-List">
	    				<li className="Resume-List-Text">Directing a group of 10-15 campers in their daily activities and looking after their wellbeing</li>
	    				<li className="Resume-List-Text">Responding to parental concerns related to the individual needs of their children</li>
	    				<li className="Resume-List-Text">Skills Engaged: Team Leadership, Childcare, Providing for Special Needs Children, Communication</li>
	    			</ul>
    			</div>

    			<div className="Resume-Section">
	    			<div className="Resume-Section-Header">Additional Experience</div>
	    			<div className="Resume-Entry-Header">Reverb Plugin Design [2017]</div>
	    			<div className="Resume-Text">Designed and programmed a Reverb Plugin, implemented in Audio Unit and VST format. Included the design of a reverb algorithm and the creation of a unique feature set, as well as C++ implementation using the JUCE framework and the design of a custom GUI. </div>
	    			<div className="Resume-Entry-Header">Firmware Programming for Csound Based Eurorack Module [2017]</div>
	    			<div className="Resume-Text">Programming of firmware on a Eurorack module that allows users to easily implement Csound patches in a hardware format, in collaboration with the modular synthesizer company Instruo, which provided the hardware design. Includes creation of an interface for easily uploading Csound patches, setting up control signal and audio input and output, as well as programming an LCD text display. </div>
	    			<div className="Resume-Entry-Header">Design of Csound Based Multi-Effects Pedal for Guitar and Vocals [2016]</div>
	    			<div className="Resume-Text">Implemented the Csound audio programming language on the Raspberry Pi microware computer for processing audio in real time, a project which included designing appropriate amplification stages for both mic and line level input, setting up audio codec support, designing an custom midi controller to pass analog control values into Csound.</div>
	    		</div>
    			<div className="Resume-Section">
	    			<div className="Resume-Section-Header">Skills</div>
	    			<div className="Resume-Entry-Header">Programming</div>
	    			<div className="Resume-Text">C, C++ (including JUCE Framwork), Objective C, Javascript, Golang, SQL, Python, Csound, Max/MSP, Linux, Assembly Language, HTML/CSS, Includes Experience Programming Microcontrollers and Embedded Processors</div>
	    			<div className="Resume-Entry-Header">Electronics</div>	
	    			<div className="Resume-Text">Circuit Board Layout, Production Line Experience with Soldering and Construction of Audio Hardware, Schematic and Circuit Board Reading, Oscilloscope Use, Effects Pedal Repair and Design, Guitar Electronics Repair, Microphone Construction, Studio Monitor Construction</div> 
	    			<div className="Resume-Entry-Header">Software</div>	
	    			<div className="Resume-Text">Proficient with Logic, Pro Tools, Ableton Live, Reason, Garageband, Xcode, Sigma Studio, TrueStudio, MPLAB X, Premiere, After Effects, Finale, Sibelius, Microsoft Office, Photoshop, GIMP</div>
	    			<div className="Resume-Entry-Header">Music</div>	
	    			<div className="Resume-Text">Guitar (Electric and Acoustic), Vocals (lead and backup), Basic Keyboard, Production, Synthesis, Sound Design, DSP, Recording, Writing and Composition</div>   			
    			</div>   
    			<div className="Resume-Section">
    				<div className="Resume-Section-Header">Education</div>
    				<div className="Resume-Entry-Header">Berklee College of Music, Boston, MA [Graduated May 2017]</div>
    				<div className="Resume-Text">BM in Electronic Production and Design with Minor in Acoustics and Electronics</div>
    				<div className="Resume-Entry-Header">McCallum High School, Austin, Texas [Graduated 2013]</div>
    				<div className="Resume-Text">High school degree with music and performing arts concentration.</div>
    			</div>
    			<div className="Resume-Section">
    				<div className="Resume-Section-Header">Awards and Accolades</div>
    				<div className="Resume-Entry-Header">Hearst Scholarship [2017]</div>
    				<div className="Resume-Text">Awarded the Berklee Electronic Production and Design Department Hearst Scholarship through faculty recommendation. </div>
    				<div className="Resume-Entry-Header">Berklee Achievement Scholarship [2015-2017]</div>
    				<div className="Resume-Text">Awarded a scholarship in recognition of my musical, academic and extracurricular accomplishments at Berklee College of Music</div>
    				<div className="Resume-Entry-Header">Dean’s List [2013-2017]</div>
    				<div className="Resume-Text">Was selected for the Dean’s List at Berklee College of Music for Every Semester Attended </div>
    			</div> 			
    		</div>
    	);
	}
}

export default Resume;    	