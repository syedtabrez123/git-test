import React from 'react';

class TextBox extends React.Component {
	render() {
		return (
			<div>
				<label>{this.props.label}</label>
				<input type="text" name={this.props.name} onChange={this.props.handler} />
			</div>	
			);
	}
}

export default TextBox;