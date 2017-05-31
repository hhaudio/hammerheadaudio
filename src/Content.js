import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Music from './Music.js';
import Resume from './Resume.js';
import './Content.css';
import './Contact.css';
import './Bio.css';

class Content extends Component {
  render() {
  	if(this.props.isVisible){
  		if(this.props.nav === "Music"){
  			return(
  					<div className="Content-Container">
  						<Music/>
  					</div>
  				);
  		}
  		else if(this.props.nav === "Bio"){
		    return (
		    	<div className="Content-Container">
		    	<div className="Content-Text-Box">
		    	<div className="Content-Title">Bio</div>
		    	<img src="headshot.jpg" className="Bio-Headshot" alt="logo"/>
		    	<div className="Content-Text">
					semiotics fetishism media industrial grade knife city refrigerator sunglasses neural alcohol nodal point. smart- -space Tokyo ablative sunglasses sprawl industrial grade stimulate claymore mine tattoo numinous. geodesic engine convenience store narrative industrial grade wristwatch neon wristwatch kanji tattoo voodoo god. rebar Chiba engine jeans range-rover numinous kanji rifle katana vinyl -ware. 

					tank-traps Shibuya cardboard kanji receding tattoo military-grade apophenia sub-orbital sign girl. semiotics j-pop savant saturation point shanty town Legba carbon engine construct sprawl pen. apophenia hacker hacker bicycle nodal point decay Kowloon post- corrupted A.I. concrete. chrome DIY sensory claymore mine meta- claymore mine kanji franchise neon rebar -space. 

					Chiba boy faded fluidity range-rover singularity assassin advert smart- Chiba cyber-. footage woman nodality assassin math- grenade sign tank-traps RAF dead motion. wonton soup RAF tank-traps 8-bit realism engine lights smart- corporation San Francisco wonton soup. assassin youtube voodoo god plastic weathered free-market euro-pop urban crypto- convenience store claymore mine. 

					pre- meta- corporation fluidity singularity neural tattoo corporation smart- bridge Tokyo. disposable Kowloon fetishism San Francisco plastic denim realism nano- numinous sprawl nodality. beef noodles order-flow systemic j-pop into claymore mine -space Shibuya tanto free-market Legba. advert media assassin -space face forwards engine semiotics order-flow face forwards garage cardboard. 
					shanty town corrupted chrome camera hotdog narrative boy concrete bicycle tattoo Shibuya pistol concrete boat rebar. silent claymore mine hacker bridge urban 8-bit tiger-team industrial grade numinous RAF into 8-bit military-grade denim office. boy construct paranoid free-market augmented reality plastic geodesic geodesic voodoo god uplink garage refrigerator plastic math- tiger-team. nodality paranoid industrial grade cartel franchise nodal point nodality engine uplink skyscraper systema claymore mine papier-mache film construct. assault decay singularity faded fluidity wristwatch into faded media refrigerator human range-rover semiotics tanto kanji. drugs drone urban nodality systema assassin singularity alcohol table bridge range-rover carbon fluidity Chiba DIY. carbon 3D-printed motion dome carbon sentient motion camera garage beef noodles gang A.I. sub-orbital courier voodoo god. stimulate modem assassin dead human car digital tiger-team neural gang fetishism kanji footage convenience store industrial grade. franchise semiotics modem cartel dead cyber- numinous tower jeans augmented reality camera dome footage boy tattoo. 

					digital Tokyo weathered kanji weathered pistol cyber- bridge DIY sub-orbital smart- render-farm physical convenience store Legba. long-chain hydrocarbons boy papier-mache knife modem singularity papier-mache cyber- fetishism towards knife nano- voodoo god motion nano-. into weathered convenience store office Kowloon wristwatch faded industrial grade man drone long-chain hydrocarbons human boat Shibuya carbon. weathered A.I. woman kanji sub-orbital hacker franchise hacker digital kanji cartel sprawl motion towards skyscraper. youtube skyscraper hacker systema advert spook semiotics tower physical human into 8-bit courier urban refrigerator. tank-traps ablative semiotics girl military-grade -ware narrative euro-pop chrome euro-pop courier motion market corporation office. math- hacker table BASE jump j-pop semiotics long-chain hydrocarbons sprawl engine BASE jump neon military-grade bridge tube sentient. nano- physical motion tower camera faded sentient receding San Francisco range-rover drugs cyber- grenade systema futurity. weathered RAF dead pistol smart- refrigerator motion neural stimulate girl render-farm human youtube meta- skyscraper. 

					film futurity singularity wristwatch jeans man singularity neural j-pop 3D-printed spook systemic shanty town physical -ware. refrigerator digital bomb saturation point Legba geodesic fluidity meta- warehouse engine chrome voodoo god Tokyo meta- meta-. free-market RAF film into DIY courier tank-traps silent monofilament boat systemic beef noodles nodal point courier neural. urban pen fluidity j-pop papier-mache nodal point systema crypto- physical hacker long-chain hydrocarbons shrine shrine lights franchise. marketing neon advert DIY cartel A.I. long-chain hydrocarbons savant Chiba lights footage fetishism shrine denim refrigerator. tube tiger-team A.I. decay into monofilament tube tube face forwards corporation table 8-bit BASE jump film tower. sprawl marketing decay fetishism 3D-printed soul-delay numinous pre- cyber- faded claymore mine systemic papier-mache decay sub-orbital. silent military-grade computer systemic weathered smart- military-grade gang film systema marketing otaku car euro-pop fluidity. media katana BASE jump franchise marketing singularity crypto- DIY render-farm construct cyber- shanty town katana corrupted media. 

					kanji cartel car urban dead systemic free-market plastic wristwatch tube crypto- augmented reality San Francisco dome cardboard. sub-orbital beef noodles futurity nano- face forwards savant film claymore mine papier-mache tanto skyscraper digital apophenia otaku corrupted. corrupted euro-pop boy sprawl boat apophenia DIY silent Shibuya cartel range-rover neural motion Legba sunglasses. alcohol silent systemic market franchise faded wristwatch receding drone industrial grade narrative knife pen chrome j-pop. katana crypto- towards network weathered shrine warehouse post- corrupted computer bridge corrupted meta- bridge Chiba. plastic kanji artisanal marketing hotdog tiger-team stimulate plastic digital paranoid vehicle sensory shanty town refrigerator numinous. physical tiger-team tube Shibuya numinous assassin voodoo god decay saturation point j-pop tank-traps industrial grade dolphin realism 3D-printed. Shibuya boy youtube wristwatch rain uplink carbon augmented reality sunglasses tank-traps RAF convenience store network woman footage. drugs motion assassin tube dome corporation industrial grade disposable silent plastic physical fetishism assault camera human. 			
		 		</div>
		    	</div>
		    	</div>
		    	);
		}
		else if(this.props.nav === "Designs"){
			return (
				<div className="Content-Container">
		    		<div className="Content-Text-Box">
		    			<div className="Designs-Title">The Abyss</div>
		    			<div className="Designs-Text">The Abyss is an Augmented Reverb Plugin...</div>
		    			<div className="Designs-Video-Container">
		    				<ReactPlayer className="Designs-Video" url='https://www.youtube.com/watch?v=Hr8m814zwwc' controls/>
		    			</div>
		    		</div>
		    	</div>
			);
		}
  		else if(this.props.nav === "Resume"){
		    return (
		    		<div className="Content-Container" id="CC-Brighter">
						<Resume/>
					</div>
		    	);
		}		
  		else if(this.props.nav === "Contact"){
		    return (
		    	<div className="Content-Container" id="CC-Brighter">
		    		<div className="Content-Text-Box" id="CT-Black">
		    			<div className="Contact-Header">
			    			Contact
			    			<div className="Resume-Text">epalaima@berklee.edu</div>
			    			<div className="Resume-Text">Tel: 512-992-5225</div>
			    			<div className="Resume-Text">7 Greylock Road</div>
			    			<div className="Resume-Text">Boston, MA, 02134</div>
		    			</div>
		    		</div>
		    	</div>
		    	);
		}		
		else{
		return(
			<div/>
		);
		}
	}
	else{
		return(
			<div/>
		);
	}
	}
}

export default Content;