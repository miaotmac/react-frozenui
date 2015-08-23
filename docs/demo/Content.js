let React = require('react');
let Content = React.createClass({
		render:function(){
			return (
				<div className="content" >
					{this.props.children}
				</div>
				);
		}
	});
module.exports = Content;