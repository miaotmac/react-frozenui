let React = require('react');
let wrap = document.querySelector('.wrap');
let Header = require('./Header/Header');
let App = React.createClass({
	render:function(){
		return (<Header></Header>);
	}
});

React.render(<App />, wrap);