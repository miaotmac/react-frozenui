
let React = require('react');
let MainContent = React.createClass({
		render:function(){
			return (
				<div className="main-content" >
					{this.props.children}
				</div>
				);
		}
	});

module.exports = MainContent;