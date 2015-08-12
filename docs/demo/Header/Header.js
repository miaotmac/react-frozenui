
let React = require('react');
let Header = React.createClass({
	render:function(){
		return (
			<div className="head-area normal">
			        <div className="head-content ">
			            <div className="title-area"><h1><a href="/">Frozen UI</a></h1></div>
			            <div className="nav-area"><a className="nav-toggle"></a>
			                <ol className="main-nav slideDown">
			                    <li><a href="start.html">快速开始</a></li>
			                    <li><a href="base.html">基础组件</a></li>
			                    <li><a href="components.html">UI 组件</a></li>
			                    <li><a href="http://frozenui.github.io/frozenjs/">JS 插件</a></li>
			                    <li><a href="case.html">动效库</a></li>
			                    <li><a href="customize.html">下载</a></li>
			                    <li><a href="/frozenui/demo/index.html">Demo</a></li>
			                    <li><a href="https://github.com/frozenui/frozenui">GitHub</a></li>
			                </ol>
			            </div>
			        </div>
			 </div>
		);
	}
});


module.exports = Header;