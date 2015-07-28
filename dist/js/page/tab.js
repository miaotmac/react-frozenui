webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1),
	    TagList = __webpack_require__(176);
	    Tag = __webpack_require__(177);

	var wrap = document.querySelector('.wrap');

	var buttonsInstance = (
	  React.createElement("div", null, 
	        React.createElement("section", {class: "ui-container"}, 
	            React.createElement(TagList, null, 
	                React.createElement(Tag, {fzStyle: "selected"})
	            )
	        )
	  )
	);

	React.render(
	    buttonsInstance, wrap
	);



/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var constants = __webpack_require__(160);
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


/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	let React = __webpack_require__(1);
	let classNames = __webpack_require__(158);
	let ClassNameMixin = __webpack_require__(159);


	let TagList = React.createClass({displayName: "TagList",
	  mixins: [ClassNameMixin],
	  getDefaultProps: function() {
	    return {
	      fzClass:'ui-grid-halve',
	    };
	  },

	  render: function() {
	    let classSet = this.getClassSet(true);
	    return (
	      React.createElement("ul", React.__spread({}, 
	        this.props, 
	        {className: classNames(this.props.className, classSet)}), 
	          this.props.children
	      )
	    );
	  }
	  
	});

	module.exports = TagList;

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	let React = __webpack_require__(1);
	let classNames = __webpack_require__(158);
	let ClassNameMixin = __webpack_require__(159);

	let Tag = React.createClass({displayName: "Tag",
	  mixins: [ClassNameMixin],

	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired
	  },
	  getDefaultProps: function() {
	    return {
	      fzClass:'ui-grid-halve-img',
	      classPrefix: 'ui-tag'
	    };
	  },

	  renderTag: function(classSet) {
	    return (
	      React.createElement("li", null, 
	        React.createElement("div", React.__spread({},  
	        this.props, 
	        {className: classNames(this.props.className, classSet)}), 
	        this.props.children
	        )
	      )
	    );
	  },

	  render: function() {
	    let classSet = this.getClassSet(true);
	    return this.renderTag(classSet);
	  }
	  
	});

	module.exports = Tag;

/***/ }

});