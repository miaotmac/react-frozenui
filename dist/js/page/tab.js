webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by vajoylan on 2015/7/7.
	 */

	'use strict';

	var globalEventHandler = __webpack_require__(169);
	var React = __webpack_require__(1),
	    PropTypes = React.PropTypes;

	var Tab = React.createClass({
	    displayName: 'Tab',

	    timer: null,
	    mixins: [globalEventHandler],
	    propTypes: {
	        defaultActiveKey: PropTypes.number, //默认激活标签项
	        autoPlay: PropTypes.bool, //是否自动播放
	        playTime: PropTypes.number
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            autoPlay: true,
	            playTime: 6000,
	            defaultActiveKey: 1
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            actKey: this.props.defaultActiveKey,
	            tabWidth: 0
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        var tabWidth = this.getDOMNode().getBoundingClientRect().width;
	        this.setState({ tabWidth: tabWidth });
	        var content = this.getDOMNode().querySelector('.ui-tab-content');
	        setTimeout(function () {
	            content.style.webkitTransition = '-webkit-transform .3s';
	        }, 10);

	        this.autoPlay();
	    },
	    handleClick: function handleClick(index) {
	        this.setState({ actKey: index });
	        clearTimeout(this.timer);
	        this.autoPlay();
	    },
	    renderPanes: function renderPanes(child, index) {
	        return React.cloneElement(child, {
	            isAct: this.state.actKey == index + 1,
	            handleClick: this.handleClick.bind(this, index + 1)
	        });
	    },
	    renderContents: function renderContents(child, index) {
	        return React.createElement(
	            'li',
	            { className: this.state.actKey == index + 1 ? 'current' : null },
	            child.props.children
	        );
	    },
	    autoPlay: function autoPlay() {
	        if (!this.props.autoPlay) return;
	        this.timer = setTimeout((function () {
	            var nextKey = this.state.actKey == this.props.children.length ? 1 : this.state.actKey + 1;
	            this.setState({ actKey: nextKey });
	            this.autoPlay();
	        }).bind(this), this.props.playTime);
	    },
	    render: function render() {
	        this.windowResize((function () {
	            var tabWidth = this.getDOMNode().getBoundingClientRect().width;
	            this.setState({ tabWidth: tabWidth });
	        }).bind(this));

	        var style = {
	            width: 100 * this.props.children.length + '%',
	            WebkitTransform: 'translateX(-' + this.state.tabWidth * (this.state.actKey - 1) + 'px)'
	        };
	        return React.createElement(
	            'div',
	            { className: "ui-tab" },
	            React.createElement(
	                'ul',
	                { className: "ui-tab-nav ui-border-b" },
	                React.Children.map(this.props.children, this.renderPanes)
	            ),
	            React.createElement(
	                'ul',
	                { className: "ui-tab-content", style: style },
	                React.Children.map(this.props.children, this.renderContents)
	            )
	        );
	    }
	});

	module.exports = Tab;

/***/ },

/***/ 169:
/***/ function(module, exports) {

	'use strict';

	var throttle = function throttle(fn, interval) {
	    //节流
	    var _self = fn,
	        timer,
	        firstTime = true;
	    return function () {
	        var args = arguments,
	            _me = this;
	        if (firstTime) {
	            _self.apply(_me, args);
	            return firstTime = false;
	        }
	        if (timer) return false;
	        timer = setTimeout(function () {
	            clearTimeout(timer);
	            timer = null;
	            _self.apply(_me, args);
	        }, interval || 300);
	    };
	};

	module.exports = {
	    windowResize: function windowResize(cb) {
	        if (typeof cb !== 'function') return;
	        window.onresize = throttle(cb);
	    }
	};

/***/ }

});