import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
    	<div style={{display: this.props.display}} className="Content-Container" id="CC-Duller">
    		<div className="Content-Text-Box" id="CT-Black" style={{paddingRight: "20px"}}>
    			<div className="Contact-Header">
	    			<div style={{position: "relative", left: 10}}>Contact</div>
	    			<div className="Resume-Text">emmett@hammerheadaudio.com</div>
	    			<div className="Resume-Text">Tel: 512-992-5225</div>
	    			<div className="Resume-Text">755 Dunlap Street, Apt J</div>
	    			<div className="Resume-Text">Santa Fe, NM, 87501</div>
                    <div className="Resume-Text">
                        Find me on: 
                        <a className="Resume-Text" id="LinkedIn" href="https://www.instagram.com/hammerhead_audio/" target="_blank">
                            Instagram
                        </a>
                        <a className="Resume-Text" id="LinkedIn" href="https://www.linkedin.com/in/emmett-palaima-b20012140/" target="_blank">
                            LinkedIn
                        </a>
                    </div>
                </div>
    		</div>
    	</div> 
    );
  }
}   	

export default Contact; 