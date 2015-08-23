let React = require('react');
let SideArea = require('./SideArea.js');
let ContentArea = require('./ContentArea.js');


let Component = React.createClass({
		render:function(){
			return (
					<div className="content">
						<SideArea></SideArea>
						<ContentArea></ContentArea>
					</div>
			);
		}
	});

module.exports = Component;