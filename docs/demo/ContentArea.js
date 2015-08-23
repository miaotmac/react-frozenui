let React = require('react');
let Button = require('../../src/js/component/Button.js');

let dataBtn = {
	id:"btn",
	title:"按钮",
	demoLink:"",
	disabled:true,
	modules:[
	 {
	 	title:"普通小按钮",
	 	domContent:
	 		<div className ="ui-btn-wrap">
	 			<Button fzSize="s">确定</Button>
	 			<Button fzSize="s" active>确定</Button>
	 			<Button fzSize="s" disabled>取消</Button>
	 			<Button fzSize="s" className = "disabled">取消</Button>
	 		</div>	
	 		,
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

	render:function(){
		return (
			 <div className = "module-group" id={this.props.id}>
			 	<div className = "group-head">
			 	  <h1 className = "group-title">
			 	  	<a href={this.props.demoLink}>{this.props.title}</a>
			 	  	<a className="doc-demo-link" href={this.props.demoLink} title="点击查看demo" target="_blank">
			 	  		<span className="icon-qr"></span>
			 	  	</a>
			 	  	<div className="doc-qrcode" >
			 	  		<canvas width="160" height="160"></canvas>
			 	  	</div>
			 	   </h1>
			 	   </div>
			 	   {
				 	   	this.props.modules.map(function(item,index){
								return (<div className="frozen-module">
									        <div className="frozen-module-head">
									          <h2 className="frozen-module-title">
									            {item.title}
									          </h2>
									          <p className="introduce"></p>
									        </div>
								           <div className="frozen-module-demo">
								         	 <div className="module-tags">
									            <span className="example module-tags">Example</span>
									            <a className="copy doc-copy-code-btn" data-clipboard-text={item.clipboard}>Copy</a>
									          </div>
									          <div className="frozen-module-dom">
										          <div className="dom-content">
									          		{item.domContent}
									             </div>
									          </div>
									          <pre className="frozen-module-code"></pre>
									        </div>
									    </div>)
							})
			 	   }
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