webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by vajoylan on 2015/7/6.
	 */

	'use strict';

	var React = __webpack_require__(1),
	    loadingCN = __webpack_require__(168).loadingCN,
	    PropTypes = React.PropTypes;

	var Loading = React.createClass({
	    displayName: 'Loading',

	    propTypes: {
	        isPart: PropTypes.bool, //是否局部加载
	        onHide: PropTypes.func, //组件卸载后的回调
	        content: PropTypes.string // 展示内容
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        if (typeof this.props.onHide === 'function') {
	            setTimeout(this.props.onHide, 10);
	        }
	    },

	    render: function render() {
	        var content = this.props.content || '正在加载中...',
	            flag = this.props.isPart ? 'partial' : 'global',
	            component = React.createElement(
	            'div',
	            { className: loadingCN.block[flag] },
	            React.createElement(
	                'div',
	                { className: loadingCN.wrap[flag] },
	                React.createElement('i', { className: loadingCN.i[flag] }),
	                React.createElement(
	                    'p',
	                    null,
	                    content
	                )
	            )
	        );

	        return component;
	    }
	});

	module.exports = Loading;

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {

	    module.exports = {
	        globalCN: {},
	        loadingCN: {
	            block: {
	                partial: 'demo-block',
	                global: 'ui-loading-block show'
	            },
	            wrap: {
	                partial: 'ui-loading-wrap',
	                global: 'ui-loading-cnt'
	            },
	            i: {
	                partial: 'ui-loading',
	                global: 'ui-loading-bright'
	            }
	        }
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

});