let React = require('react');
let Router = require('react-router');
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;
let RouteHandler = Router.RouteHandler;

let wrap = document.querySelector('.wrap');
let Header = require('./Header/Header');
let Banner = require('./Banner.js');
let Footer = require('./Footer.js');
let GettingStart = require('./GettingStart.js');
let MainContent = require('./MainContent.js');
let Base = require('./Base.js');
let Component = require('./Component.js');
let Download = require('./Download.js');
import Demo from './Demo.js';

let styleCss  = require('./css/base.css');
let styleComponent  = require('./css/component.css');
let stylesolarized_light = require('./css/solarized_light.css');

let App = React.createClass({
	render:function(){
		return (
				<div className = "body-wrapper">
					<Header />
					<MainContent>
						<Banner />
					{/* this is the important part */}
        			<RouteHandler/>
					</MainContent>
					<Footer />
				</div>
		);
	}
});

let routes = (
    <Route name='app' path='/' handler={App}>
	    <Route name='gettingstart' handler={GettingStart} />
	    <Route name='base' handler={Base} />
	    <Route name='components' handler={Component} />
	    <Route name='download' handler={Download} />
	    <Route name='demo' handler={Demo} />
	    <DefaultRoute handler={Base} />
	  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
