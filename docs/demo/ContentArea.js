let React = require('react');
let dataBtn = {
	id:"btn",
	title:"按钮",
	demoLink:"",
	disabled:true,
	modules:[
	 {
	 	title:"aaa",
	 	domContent:"domContent",
	 	clipboard:"clipboard"
	 }
	]
};

let ModuleGroup = React.createClass({
	  propTypes:{
		    id: React.PropTypes.string.isRequired,
		    title: React.PropTypes.string,
		    demoLink: React.PropTypes.string,
		    disabled:React.PropTypes.bool,
		    modules:React.PropTypes.array
		},

	renderModule: function(){
		 this.props.modules.map(function(item,index){
			return (<div classnName="frozen-module">
				        <div classnName="frozen-module-head">
				          <h2 classnName="frozen-module-title">
				            {item.title}
				          </h2>
				          <p classnName="introduce"></p>
				        </div>
			           <div classnName="frozen-module-demo">
			         	 <div classnName="module-tags">
				            <span classnName="example module-tags">Example</span>
				            <a classnName="copy doc-copy-code-btn" data-clipboard-text={item.clipboard}>Copy</a>
				          </div>
				          <div classnName="frozen-module-dom">
					          <div classnName="dom-content">
				          		{item.domContent}
				             </div>
				          </div>
				          <pre classnName="frozen-module-code"></pre>
				        </div>
				    </div>);
		});
	},

	render:function(){
		return (
			 <div className = "module-group" id={this.props.id}>
			 	<div className = "group-head">
			 	  <h1 className = "group-title">
			 	  	<a href={this.props.demoLink}>{this.props.title}</a>
			 	  	<a classnName="doc-demo-link" href={this.props.demoLink} title="点击查看demo" target="_blank">
			 	  	<span classnName="icon-qr"></span></a>
			 	  	<div classnName="doc-qrcode" ><canvas width="160" height="160"></canvas></div>
			 	   </h1>
			 	   </div>
			 	   {this.renderModule}
			 </div>
			);
	}
});

let ContentArea = React.createClass({
		render:function(){
			return <div className="content-area">
						<div className="frozen-modules">
							<ModuleGroup title={dataBtn.title} id = {dataBtn.id} modules = {dataBtn.modules} />
						</div>
				</div>
		}
	});

module.exports = ContentArea;