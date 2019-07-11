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
    				<div className="Resume-Section-Header">Work Experience</div>

    				<div className="Resume-Entry-Header">Sound Technologist at Meow Wolf [04/18-Present]</div>
	    			<div className="Resume-Text">Work as a creative voice, programmer, and electrical engineer providing for sound technology needs at current and future installations, including:</div>
	    			<ul className="Resume-List">
	    				<li className="Resume-List-Text">Creative concepting and decision making for audio tech in installation pieces, ranging from technical problem solving, to filling out specifics of broad ideas, to developing and executing original ideas.</li>
	    				<li className="Resume-List-Text">Design of custom circuit boards, including a modular driver system for large-scale robotic orchestras. </li>
	    				<li className="Resume-List-Text">Design of generative and interactive audio systems, including generative motor sound design for art car installations, spatial systems, and interactive systems.</li>
	    				<li className="Resume-List-Text">Embedded audio design, including a multichannel audio system for the Teensy Microcontroller </li>
	    				<li className="Resume-List-Text">Installation of audio tech in exhibitions, including tech for a room at the Meow Wolf House of
							Eternal Return in Santa Fe, New Mexico.</li>
	    				<li className="Resume-List-Text">Skills Engaged: Electrical Engineering, KiCad, Max/MSP, C/C++ (JUCE), QSYS, Embedded
							Programming (Arduino), Sound Design, Creativity, Collaboration, Technical Problem Solving</li>
	    			</ul>

	    			<div className="Resume-Entry-Header">Design Engineer and Programmer at Dwarfcraft Devices [09/16-Present]</div>
	    			<div className="Resume-Text">Work remotely as a programmer and hardware engineer on design of effects pedals and synthesizers, including:</div>
	    			<ul className="Resume-List">
	    				<li className="Resume-List-Text">Design and programming of DSP based effects pedals, including two designs completed and commercially released: The Ghost Fax Phase Computer and the Haxx II Ring Mod + Filter Pedal</li>
	    				<li className="Resume-List-Text">Design and programming of effects for Dwarfcraft installations, including phaser and delay programs for an interactive exhibit at the Children’s Museum of Eau Claire.</li>
						<li className="Resume-List-Text">Skills Engaged: C, Microcontroller Programming (Spin, PIC, STM32, ATMega, Sharc), KiCad, Electrical Engineering, Sound Design, Communication</li>
	    			</ul>

    				<div className="Resume-Entry-Header">Design Engineer and Programmer at J. Rockett Audio Designs [08/17-04/18]</div>
	    			<div className="Resume-Text">Work remotely as a programmer and hardware engineer on design of effects pedals, including:</div>
	    			<ul className="Resume-List">
	    				<li className="Resume-List-Text">Design and programming of DSP emulations of classic analog effects, including digital emulation of analog tape delay.</li>
	    				<li className="Resume-List-Text">Integration of analog and digital portions of designs, including modifying analog circuits such as preamps to work with digital elements, and designing a digital tap tempo system for analog delay.</li>
	    				<li className="Resume-List-Text">Skills Engaged: C, Microcontroller Programming (Sharc), KiCad, Electrical Engineering, Sound Design, Communication</li>
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
	    			<div className="Resume-Entry-Header">Elizabeth Colour Wheel [2014-Present]</div>
	    			<div className="Resume-Text">
	    				Play guitar in a 5-piece band signed to The Flenser, on which we released our debut LP ‘Nocebo’ in March of 2019. We have toured throughout the United States and shared the stage with such acts as Have a Nice Life, Planning for Burial, Drowse, Full of Hell, Primitive Man, Jerome’s Dream, Loma Prieta, Big Brave, Sannhet, Street Sects, and more.
	    			</div>

	    			<div className="Resume-Entry-Header">The Sound of Dreaming [2017]</div>
	    			<div className="Resume-Text">
	    				Took part in the production and performance of a piece entitled the “The Sound of Dreaming”, headed by Nona Hendryx and Dr. Richard Boulanger, which premiered at Moogfest 2017 with a repeat performance at Mass MoCA. Contributions included developing a Csound based Vocal Effects Processor, which featured prominently in the piece, as well as performing on bass and DJ equipment, learning and managing several controller systems, and circuit-bending toys for use as sound-making props.
	    			</div>
	    			
	    		</div>

	    		    			<div className="Resume-Section">
	    			<div className="Resume-Section-Header">Additional Experience</div>

	    			<div className="Resume-Entry-Header">Reverb Plugin Design [2017]</div>
	    			<div className="Resume-Text">Designed and programmed a Reverb Plugin using C++/JUCE as part of my thesis project at Berklee College of Music. </div>
	    			
	    		</div>

    			<div className="Resume-Section">
	    			<div className="Resume-Section-Header">Skills</div>
	    			<div className="Resume-Entry-Header">Programming</div>
	    			<div className="Resume-Text">
	    				C, C++ (including JUCE Framwork), Max/MSP, Javascript (including React), Processing, Python, Linux (including Raspberry Pi), Assembly Languages, Includes Experience Programming Microcontrollers and Embedded Processors (Sharc DSP, SPIN FV-1, PIC32/16, STM32, ATMega, etc.)
	    			</div>

	    			<div className="Resume-Entry-Header">Software</div>	
	    			<div className="Resume-Text">
	    				Proficient with Ableton Live, Logic, Pro Tools, QSYS, Xcode, Unity, Sigma Studio, TrueStudio, MPLAB X, Premiere, After Effects, Finale, Sibelius, Microsoft Office, Photoshop, GIMP
	    			</div>

	    			<div className="Resume-Entry-Header">Music</div>	
	    			<div className="Resume-Text">
	    				Guitar, Vocals (lead and backup), Bass, Basic Keyboard, Production, Synthesis, Sound Design, DSP, Recording, Writing and Composition
	    			</div>

	    			<div className="Resume-Entry-Header">Electronics</div>	
	    			<div className="Resume-Text">
	    				Circuit Board Layout, Electronics Fabrication for Installations, Production Line Fabrication, Schematic and Circuit Board Reading, Oscilloscope Use, Effects Pedal Repair and Design, Guitar Electronics Repair
	    			</div> 

    			</div>   

    			<div className="Resume-Section">
    				<div className="Resume-Section-Header">Education</div>
    				<div className="Resume-Entry-Header">Berklee College of Music, Boston, MA [Graduated May 2017]</div>
    				<div className="Resume-Text">BM in Electronic Production and Design with Minor in Acoustics and Electronics</div>
    			</div>
    			<div className="Resume-Section">
    				<div className="Resume-Section-Header">Awards and Accolades</div>
    				<div className="Resume-Entry-Header">Hearst Scholarship [2017]</div>
    				<div className="Resume-Text">Awarded the Berklee Electronic Production and Design Department Hearst Scholarship through faculty recommendation. </div>
    				<div className="Resume-Entry-Header">Berklee Achievement Scholarship [2015-2017]</div>
    				<div className="Resume-Text">Awarded a scholarship in recognition of my musical, academic and extracurricular accomplishments at Berklee College of Music</div>
    				<div className="Resume-Entry-Header">Dean’s List [2013-2017]</div>
    				<div className="Resume-Text">Was selected for the Dean’s List at Berklee College of Music for every semester attended </div>
    			</div> 			
    		</div>
    	</div>
    	);
	}
}

export default Resume;    	