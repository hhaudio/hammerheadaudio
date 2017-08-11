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
	    			<div className="Resume-Text">7 Greylock Road</div>
	    			<div className="Resume-Text">Boston, MA, 02134</div>
                    <div className="Resume-Text">
                        Find me on: 
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

//<a className="Resume-Text" id="LinkedIn" style={{textDecoration: "none"}} href="https://www.linkedin.com/in/emmett-palaima-b20012140/">LinkedIn</a>
/*<a href="https://www.linkedin.com/in/emmett-palaima-b20012140/">
                        <img src="linkedin.png" id="LinkedIn"/>
                    </a>*/