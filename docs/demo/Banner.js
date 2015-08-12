let React = require('react');
let Banner = React.createClass({
		render:function(){
			return (
				<div className="banner">
						<div className="banner-content">
						    <h1>UI 组件</h1>
				            <p className="info">简单易用，轻量快捷，为移动端服务的前端框架</p>
						</div>
				</div>
			);
		}
	});

module.exports = Banner;