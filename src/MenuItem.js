import React, { Component } from 'react';

class MenuItem extends Component {
  	render() {
  		if(this.props.nav !== this.props.text){
	    	return (
	    		<div className="Menu-Divider" id={this.props.idfl} onClick={(e) => {this.props.onClick(this.props.text)}}>
	    			<div className="Menu-Item" id={this.props.idfl}>{this.props.text}</div>
	    		</div>
	    	);
    	}
    	else{
	    	return (
	    		<div className="Menu-Divider" id={this.props.idfl} onClick={(e) => {this.props.onClick(this.props.text)}}>
	    			<div style={{backgroundColor: "rgba(135,206,250, .9)"}} className="Menu-Item" id={this.props.idfl} >{this.props.text}</div>
	    		</div>
	    	);    		
    	}
	}
}

export default MenuItem;