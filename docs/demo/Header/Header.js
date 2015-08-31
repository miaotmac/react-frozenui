let React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
let Header = React.createClass({
	render:function(){
		return (
			<div className="head-area normal">
			        <div className="head-content ">
			            <div className="title-area"><h1><a href="/">Frozen UI</a></h1></div>
			            <div className="nav-area"><a className="nav-toggle"></a>
			                <ol className="main-nav slideDown">
			                    <li><Link to="gettingstart">快速开始</Link></li>
			                    <li><Link to="base">基础组件</Link></li>
			                    <li><Link to="components">UI 组件</Link></li>
			                    <li><Link to="download">下载</Link></li>
			                    <li><Link to="demo">Demo</Link></li>
			                    <li><a href="https://github.com/frozenui/frozenui">GitHub</a></li>
			                </ol>
			            </div>
			        </div>
			 </div>
		);
	}
});


module.exports = Header;

