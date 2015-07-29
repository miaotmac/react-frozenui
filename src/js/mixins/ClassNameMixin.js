'use strict';

var React = require('react');
var constants = require('../constants');
var nsPrefix = (constants.NAMESPACE ? constants.NAMESPACE + '-' : '');

module.exports = {
  getClassSet: function(ignorePrefix) {
    var classNames = {};
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
