import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
    	<div style={{display: this.props.display}} className="Content-Container" id="CC-Duller">
    		<div className="Content-Text-Box" id="CT-Black">
    			<div className="Contact-Header">
	    			<div style={{position: "relative", left: 10}}>Contact</div>
	    			<div className="Resume-Text">epaudiodev@gmail.com</div>
	    			<div className="Resume-Text">Tel: 512-992-5225</div>
	    			<div className="Resume-Text">7 Greylock Road</div>
	    			<div className="Resume-Text">Boston, MA, 02134</div>
    			</div>
    		</div>
    	</div> 
    );
  }
}   	

export default Contact; 