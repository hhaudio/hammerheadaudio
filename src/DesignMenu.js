import React, { Component } from 'react';

class DesignMenu extends Component {
  	render() {
  		if(this.props.nav !== this.props.text){
	    	return (
	    		<div className="DesignMenu-Divider" style={{width: this.props.width}} id={this.props.idfl} onClick={(e) => {this.props.onClick(this.props.text)}}>
	    			<div className="DesignMenu" id={this.props.idfl}>{this.props.text}</div>
	    		</div>
	    	);
    	}
    	else{
	    	return (
	    		<div className="DesignMenu-Divider" style={{width: this.props.width}} id={this.props.idfl} onClick={(e) => {this.props.onClick(this.props.text)}}>
	    			<div style={{textDecoration:"underline overline"}} className="DesignMenu" id={this.props.idfl} >{this.props.text}</div>
	    		</div>
	    	);    		
    	}
	}
}

export default DesignMenu;