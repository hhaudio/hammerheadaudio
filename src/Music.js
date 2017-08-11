import React, { Component } from 'react';
import "./Music.css"
import "./Content.css"

class Music extends Component {
  /*shouldComponentUpdate(){
    return false;
  }*/
  
  render() {
    var bcWidth;
    if(this.props.width < 800){
        bcWidth = this.props.width > 520 ? this.props.width - 100 : 420;
    }
    else{
        bcWidth = 700
    }
    return (
            <div style={{display: this.props.display/*, minWidth: "480px", minHeight: "140px"*/}} className="Content-Container">
        		<div className="Content-Text-Box">
        			<div className="Content-Title">Shark Rock</div>
        			<div className="Content-Text">Shark Rock is a band...</div>
        			<div style={{width: bcWidth}} className="Bandcamp-Container">
                        Loading Bandcamp Player...
        				<iframe className="Bandcamp-Embed" src="https://bandcamp.com/EmbeddedPlayer/album=485363534/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"><a href="http://summersending.bandcamp.com/album/summers-ending-2">Summer&#39;s Ending by Shark Rock!</a></iframe>
        			</div>
        			<div className="Content-Title">Elizabeth Colour Wheel</div>
        			<div className="Content-Text">Elizabeth Colour Wheel is a band...</div>
        			<div style={{width: bcWidth}} className="Bandcamp-Container">
                        Loading Bandcamp Player...
        				<iframe className="Bandcamp-Embed" src="https://bandcamp.com/EmbeddedPlayer/album=4021775658/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"><a href="http://elizabethcolourwheel.bandcamp.com/album/single">Single by Elizabeth Colour Wheel</a></iframe>
        			</div>
        		</div>
            </div>
    	);
	}
}

export default Music;