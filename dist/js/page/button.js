webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var classNames = __webpack_require__(158);
	var ClassNameMixin = __webpack_require__(159);

	var Button = React.createClass({
	  displayName: 'Button',

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

	  getDefaultProps: function getDefaultProps() {
	    return {
	      fzClass: 'ui-btn',
	      classPrefix: 'ui-btn',
	      type: 'button',
	      fzStyle: 'primary'
	    };
	  },

	  renderButton: function renderButton(classSet) {
	    var Component = this.props.componentTag || 'button';

	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet) }),
	      this.props.children
	    );
	  },

	  render: function render() {
	    var classSet = this.getClassSet(true);
	    return this.renderButton(classSet);
	  }
	});

	module.exports = Button;

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var constants = __webpack_require__(160);
	var nsPrefix = constants.NAMESPACE ? constants.NAMESPACE + '-' : '';

	module.exports = {
	  getClassSet: function getClassSet(ignorePrefix) {
	    var classNames = {};
	    var prefix = nsPrefix;

	    if (this.props.classPrefix) {
	      var classPrefix = this.setClassNamespace();

	      prefix = classPrefix + '-';

	      // don't return prefix if flag set
	      !ignorePrefix && (classNames[classPrefix] = true);
	    }

	    var fzSize = this.props.fzSize;
	    var fzStyle = this.props.fzStyle;
	    var fzClass = this.props.fzClass;

	    if (fzClass) {
	      classNames[fzClass] = true;
	    }

	    if (fzSize) {
	      classNames[prefix + fzSize] = true;
	    }

	    if (Array.isArray(fzStyle)) {
	      fzStyle.map(function (i) {
	        classNames[prefix + i] = true;
	      });
	    } else if (fzStyle) {
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
	  setClassNamespace: function setClassNamespace(classPrefix) {
	    var prefix = classPrefix || this.props.classPrefix || '';

	    return nsPrefix + prefix;
	  },

	  prefixClass: function prefixClass(subClass) {
	    return this.setClassNamespace() + '-' + subClass;
	  }
	};

/***/ },

/***/ 160:
/***/ function(module, exports) {

	'use strict';

	var NAMESPACE = '';
	var setNamespace = function setNamespace(className) {
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
	    'default': 'default',
	    primary: 'primary',
	    secondary: 'secondary',
	    success: 'success',
	    warning: 'warning',
	    danger: 'danger'
	  },

	  SIZES: {}
	};

/***/ }

});