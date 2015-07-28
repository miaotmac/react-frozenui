webpackJsonp([0],{

/***/ 0:
/*!*******************************!*\
  !*** ./src/js/page/button.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1),
	    Button = __webpack_require__(/*! ../component/Button */ 157);
	
	var wrap = document.querySelector('.wrap');
	
	var buttonsInstance = (
	  React.createElement("div", null, 
	        React.createElement("section", {class: "ui-container"}, 
				React.createElement("section", {id: "btn"}, 
				    React.createElement("div", {class: "demo-item"}, 
				        React.createElement("p", {class: "demo-desc"}, "普通小按钮"), 
				        React.createElement("div", {class: "demo-block"}, 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, {componentTag: "a", fzSize: "s"}, 
				                    "确定"
				                ), 
				                React.createElement(Button, {fzSize: "s", active: true}, 
				                    "确定"
				                ), 
				                React.createElement(Button, {fzSize: "s", disabled: true}, 
				                    "取消"
				                ), 
				                React.createElement(Button, {fzSize: "s", disabled: true}, 
				                    "取消"
				                )
				            )
				        )
				    ), 
				    React.createElement("div", {class: "demo-item"}, 
				        React.createElement("p", {class: "demo-desc"}, "普通按钮"), 
				        React.createElement("div", {class: "demo-block"}, 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, null, 
				                    "确定"
				                ), 
				                React.createElement(Button, {active: true}, 
				                    "确定"
				                ), 
				                React.createElement(Button, {disabled: true}, 
				                    "取消"
				                )
				            )
				        )
				    ), 
				    React.createElement("div", {class: "demo-item"}, 
				        React.createElement("p", {class: "demo-desc"}, "带进度的按钮"), 
				        React.createElement("div", {class: "demo-block"}, 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, {fzStyle: "progress"}, "确定"), 
				                React.createElement(Button, {fzStyle: "progress"}, 
				                    React.createElement("span", {class: "ui-btn-inner"}, React.createElement("span", null, "50%"))
				                ), 
				                React.createElement(Button, {fzStyle: "progress", disabled: true}, "取消")
				            )
				        )
				    ), 
				    React.createElement("div", {class: "demo-item"}, 
				        React.createElement("p", {class: "demo-desc"}, "蓝色按钮"), 
				        React.createElement("div", {class: "demo-block"}, 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, {fzStyle: "primary"}, 
				                    "确定"
				                ), 
				                React.createElement(Button, {fzStyle: "primary", active: true}, 
				                    "确定"
				                ), 
				                React.createElement(Button, {fzStyle: "primary", disabled: true}, 
				                    "取消"
				                )
				            )
				        )
				    ), 
				    React.createElement("div", {class: "demo-item"}, 
				        React.createElement("p", {class: "demo-desc"}, "红色按钮"), 
				        React.createElement("div", {class: "demo-block"}, 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, {fzStyle: "danger"}, 
				                    "确定"
				                ), 
				                React.createElement(Button, {fzStyle: "danger", active: true}, 
				                    "确定"
				                ), 
				                React.createElement(Button, {fzStyle: "danger", disabled: true}, 
				                    "取消"
				                )
				            )
				        )
				    ), 
				    React.createElement("div", {class: "demo-item"}, 
				        React.createElement("p", {class: "demo-desc"}, "普通大按钮"), 
				        React.createElement("div", {class: "demo-block"}, 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, {fzSize: "lg"}, 
				                    "确定"
				                )
				            ), 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, {fzSize: "lg", active: true}, 
				                    "确定"
				                )
				            ), 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, {fzSize: "lg", disabled: true}, 
				                    "取消"
				                )
				            )
				        )
				    ), 
				    React.createElement("div", {class: "demo-item"}, 
				        React.createElement("p", {class: "demo-desc"}, "蓝色大按钮"), 
				        React.createElement("div", {class: "demo-block"}, 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, {fzSize: "lg", fzStyle: "primary"}, 
				                    "确定"
				                )
				            ), 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, {fzSize: "lg", fzStyle: "primary", active: true}, 
				                    "确定"
				                )
				            ), 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, {fzSize: "lg", fzStyle: "primary", disabled: true}, 
				                    "取消"
				                )
				            )
				        )
				    ), 
				    React.createElement("div", {class: "demo-item"}, 
				        React.createElement("p", {class: "demo-desc"}, "红色大按钮"), 
				        React.createElement("div", {class: "demo-block"}, 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, {fzSize: "lg", fzStyle: "danger"}, 
				                    "确定"
				                )
				            ), 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, {fzSize: "lg", fzStyle: "danger", active: true}, 
				                    "确定"
				                )
				            ), 
				            React.createElement("div", {class: "ui-btn-wrap"}, 
				                React.createElement(Button, {fzSize: "lg", fzStyle: "danger", disabled: true}, 
				                    "取消"
				                )
				            )
				        )
				    ), 
				    React.createElement("div", {class: "demo-item"}, 
				        React.createElement("p", {class: "demo-desc"}, "普通按钮组"), 
				        React.createElement("div", {class: "demo-block"}, 
				            React.createElement("div", {class: "ui-btn-group"}, 
				                React.createElement(Button, {fzSize: "lg"}, 
				                    "拒绝"
				                ), 
				                React.createElement(Button, {fzSize: "lg"}, 
				                    "拒绝"
				                ), 
				                React.createElement(Button, {fzSize: "lg", fzStyle: "primary"}, 
				                    "同意"
				                )
				            )
				        )
				    ), 
				    React.createElement("div", {class: "demo-item"}, 
				        React.createElement("p", {class: "demo-desc"}, "底部按钮组"), 
				        React.createElement("div", {class: "demo-block"}, 
				            React.createElement("div", {class: "ui-footer ui-footer-stable ui-btn-group ui-border-t"}, 
				                React.createElement(Button, {fzSize: "lg"}, 
				                    "拒绝"
				                ), 
				                React.createElement(Button, {fzSize: "lg"}, 
				                    "拒绝"
				                ), 
				                React.createElement(Button, {fzSize: "lg", fzStyle: "primary"}, 
				                    "同意"
				                )
				            )
				        )
				    )
				)
	        )
	  )
	);
	
	React.render(
	    buttonsInstance, wrap
	);
	


/***/ },

/***/ 157:
/*!************************************!*\
  !*** ./src/js/component/Button.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(/*! react */ 1);
	var classNames = __webpack_require__(/*! classnames */ 158);
	var ClassNameMixin = __webpack_require__(/*! ../mixins/ClassNameMixin */ 159);
	
	var Button = React.createClass({displayName: "Button",
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired,
	    active: React.PropTypes.bool,
	    block: React.PropTypes.bool,
	    disabled: React.PropTypes.bool,
	    radius: React.PropTypes.bool,
	    round: React.PropTypes.bool,
	    componentTag: React.PropTypes.node,
	    href: React.PropTypes.string,
	    target: React.PropTypes.string
	  },
	
	  getDefaultProps: function() {
	    return {
	      fzClass:'ui-btn',
	      classPrefix: 'ui-btn',
	      type: 'button',
	      fzStyle: 'primary'
	    };
	  },
	
	  renderButton: function(classSet) {
	    var Component = this.props.componentTag || 'button';
	
	    return (
	      React.createElement(Component, React.__spread({}, 
	        this.props, 
	        {className: classNames(this.props.className, classSet)}), 
	        this.props.children
	      )
	    );
	  },
	
	  render: function() {
	    var classSet = this.getClassSet(true);
	    return this.renderButton(classSet);
	  }
	});
	
	module.exports = Button;

/***/ },

/***/ 159:
/*!*****************************************!*\
  !*** ./src/js/mixins/ClassNameMixin.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(/*! react */ 1);
	var constants = __webpack_require__(/*! ../constants */ 160);
	var nsPrefix = (constants.NAMESPACE ? constants.NAMESPACE + '-' : '');
	
	module.exports = {
	  getClassSet: function(ignorePrefix) {
	    var classNames = {};
	    // uses `.am-` as prefix if `classPrefix` is not defined
	    var prefix = nsPrefix;
	
	    if (this.props.classPrefix) {
	      var classPrefix = this.setClassNamespace();
	
	      prefix = classPrefix + '-';
	
	      // don't return prefix if flag set
	      !ignorePrefix && (classNames[classPrefix] = true);
	    }
	
	    let fzSize = this.props.fzSize;
	    let fzStyle = this.props.fzStyle;
	    let fzClass = this.props.fzClass;
	
	    if(fzClass) {
	      classNames[fzClass] = true;
	    }
	
	    if (fzSize) {
	      classNames[prefix + fzSize] = true;
	    }
	
	    
	    if(Array.isArray(fzStyle)) {
	        fzStyle.map(function(i){
	          classNames[prefix + i] = true;
	        });
	    }else if(fzStyle) {
	        classNames[prefix + fzStyle] = true;
	    }
	
	    // add theme className for widgets
	    if (this.props.theme) {
	      classNames[prefix + this.props.theme] = true;
	    }
	
	    // states
	    classNames[constants.CLASSES.active] = this.props.active;
	    classNames[constants.CLASSES.disabled] = this.props.disabled;
	
	    // shape
	    classNames[constants.CLASSES.radius] = this.props.radius;
	    classNames[constants.CLASSES.round] = this.props.round;
	
	    // clearfix
	    classNames[constants.CLASSES.cf] = this.props.cf;
	
	    // am-divider
	    if (this.props.classPrefix !== 'divider') {
	      classNames[constants.CLASSES.divider] = this.props.divider;
	    }
	
	    return classNames;
	  },
	
	  // add namespace to classPrefix
	  setClassNamespace: function(classPrefix) {
	    var prefix = classPrefix || this.props.classPrefix || '';
	
	    return nsPrefix + prefix;
	  },
	
	  prefixClass: function(subClass) {
	    return this.setClassNamespace() + '-' + subClass;
	  }
	};


/***/ },

/***/ 160:
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ function(module, exports) {

	'use strict';
	
	const NAMESPACE = '';
	var setNamespace = function(className) {
	  return (NAMESPACE ? NAMESPACE + '-' : '') + className;
	};
	
	module.exports = {
	  NAMESPACE: NAMESPACE,
	
	  CLASSES: {
	    active: setNamespace('active'),
	    disabled: setNamespace('disabled'),
	    round: setNamespace('round'),
	    radius: setNamespace('radius'),
	    square: setNamespace('square'),
	    circle: setNamespace('circle'),
	    divider: setNamespace('divider'),
	    cf: setNamespace('cf'),
	    fl: setNamespace('fl'),
	    fr: setNamespace('fr')
	  },
	
	  STYLES: {
	    default: 'default',
	    primary: 'primary',
	    secondary: 'secondary',
	    success: 'success',
	    warning: 'warning',
	    danger: 'danger'
	  },
	
	  SIZES: {
	
	  }
	};


/***/ }

});
//# sourceMappingURL=button.js.map