/**
 * Created by vajoylan on 2015/7/10.
 */
require('../../css/reset.scss');
require('../../css/frozen.css');

var React = require('react'),
	classnames = require('classnames'),
    Loading = require('../component/Loading');

var wrap = document.querySelector('.wrap'),
    hideCallback = function(){
        alert('done!!');
    };

React.render(
    <Loading content='哈喽' onHide={hideCallback}/>, wrap
);

setTimeout(function(){
    React.unmountComponentAtNode(wrap)
}, 3000);