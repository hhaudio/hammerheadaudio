import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import "./Music.css"
import "./Content.css"

var ECWVid = 'https://youtu.be/UPa2S_V3Q5g';
var ECWbio = "Elizabeth Colour Wheel is a five-piece band whose music combines elements of metal, punk, and shoegaze, to create a sound that is both crushing and aggressive while also being highly emotive and textural. They are signed to The Flenser, where they released their debut LP \'Nocebo\' in March of 2019. They have toured throughout the U.S. and shared the stage with acts including: Have a Nice Life, Planning for Burial, Jerome's Dream, Loma Prieta, Full of Hell, Primitive Man, Big Brave, Sannhet, Wreck and Reference and more."

class Music extends Component {
  
  render() {
    var bcWidth;
    if(this.props.width < 800){
        bcWidth = this.props.width > 520 ? this.props.width - 100 : 420;
    }
    else{
        bcWidth = 700
    }

        var playerWidth;
        var playerHeight;
      var heightComp = this.props.height - 180;
        if(this.props.width < 460 || heightComp < 216){
            playerWidth = 288;
        playerHeight = 162;
        }
      else if(this.props.width < 560 || heightComp < 270){
        playerWidth = 384;
        playerHeight = 216;
      }
        else if(this.props.width < 740 || heightComp < 360){
            playerWidth = 480;
            playerHeight = 270;
        }
        else{
            playerWidth = 640;
            playerHeight = 360;
        }

    return (
            <div style={{display: this.props.display}} className="Content-Container">
        		<div className="Content-Text-Box">
        			<div className="Content-Title">Elizabeth Colour Wheel</div>
        			<div className="Content-Text">
                        {ECWbio}
                    </div>
        			<div style={{width: bcWidth}} className="Bandcamp-Container">
                        Loading Bandcamp Player...
                        <iframe className="Bandcamp-Embed" src="https://bandcamp.com/EmbeddedPlayer/album=3268967593/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://elizabethcolourwheel.bandcamp.com/album/nocebo">Nocebo by Elizabeth Colour Wheel</a></iframe>
                    </div>
                    <div style={{width: bcWidth}} className="Bandcamp-Container">
                        Loading Bandcamp Player...
                        <iframe className="Bandcamp-Embed" src="https://bandcamp.com/EmbeddedPlayer/album=1046634/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://elizabethcolourwheel.bandcamp.com/album/queen-tired">Queen Tired by Elizabeth Colour Wheel</a></iframe>
                    </div>
                    <div className="Content-Title">Shark Rock</div>
                    <div className="Content-Text">
                        Shark rock is a two-piece which performs a unique blend of math-rock, punk, garage rock and noise. Two boys, straight from the beach. Get ready to Shark Rock!
                    </div>
                    <div style={{width: bcWidth}} className="Bandcamp-Container">
                        Loading Bandcamp Player...
                        <iframe className="Bandcamp-Embed" src="https://bandcamp.com/EmbeddedPlayer/album=485363534/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"><a href="http://summersending.bandcamp.com/album/summers-ending-2">Summer&#39;s Ending by Shark Rock!</a></iframe>
                    </div>
        		</div>
            </div>
    	);
	}
}

export default Music;

/*
<div style={{height: playerHeight, width: playerWidth, marginBottom: '20px'}} className="Designs-Video-Container">
                        Loading Youtube Player...
                        <ReactPlayer height={playerHeight} width={playerWidth} className="Designs-Video" url={ECWVid} controls/>
                    </div>
*/

