import React, { Component } from 'react';
import "./Music.css"
import "./Content.css"

class Music extends Component {
  
  render() {
    var bcWidth;
    if(this.props.width < 800){
        bcWidth = this.props.width > 520 ? this.props.width - 100 : 420;
    }
    else{
        bcWidth = 700
    }
    return (
            <div style={{display: this.props.display}} className="Content-Container">
        		<div className="Content-Text-Box">
        			<div className="Content-Title">Shark Rock</div>
        			<div className="Content-Text">
                        Shark rock is a two-piece which performs a unique blend of math-rock, punk, garage rock and noise. Two boys, straight from the beach. Get ready to Shark Rock!
                    </div>
        			<div style={{width: bcWidth}} className="Bandcamp-Container">
                        Loading Bandcamp Player...
        				<iframe className="Bandcamp-Embed" src="https://bandcamp.com/EmbeddedPlayer/album=485363534/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"><a href="http://summersending.bandcamp.com/album/summers-ending-2">Summer&#39;s Ending by Shark Rock!</a></iframe>
        			</div>
        			<div className="Content-Title">Elizabeth Colour Wheel</div>
        			<div className="Content-Text">
                        Elizabeth Colour Wheel is a project combining the textural elements of shoegaze with the aggression of punk and doom. Fronted by the powerful vocals of Lane Shi, they are known for their massive sound and highly energetic live performances. 
                    </div>
        			<div style={{width: bcWidth}} className="Bandcamp-Container">
                        Loading Bandcamp Player...
                        <iframe className="Bandcamp-Embed" src="https://bandcamp.com/EmbeddedPlayer/album=2561530644/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://elizabethcolourwheel.bandcamp.com/album/ep-b-side-live">EP B-Side (Live) by Elizabeth Colour Wheel</a></iframe>
        			</div>
        		</div>
            </div>
    	);
	}
}

export default Music;

