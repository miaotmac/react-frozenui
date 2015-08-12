let React = require('react');
let wrap = document.querySelector('.wrap');
let Header = require('./Header/Header');
let Banner = require('./Banner.js');
let MainContent = require('./MainContent.js');
let Footer = require('./Footer.js');
let SideArea = require('./SideArea.js');
let ContentArea = require('./ContentArea.js');

let App = React.createClass({
	render:function(){
		return (
				<div className = "body-wrapper">
					<Header />
					<MainContent>
						<Banner />
						<div className="content">
							<SideArea></SideArea>
							<ContentArea></ContentArea>
						</div>
					</MainContent>
					<Footer />
				</div>
			);
	}
});
React.render(<App />, wrap);