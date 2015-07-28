'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('../mixins/ClassNameMixin');
var omit = require('object.omit');

var ReddotStatic = React.createClass({
    render: function() {
        var classSet = this.getClassSet(true);
        if(this.props.fzType == "static") {
            return (<i  {...this.props} classnames = {classNames(this.props.className, classSet)}></i>);
        }
        return ();
    }
});


var Reddot = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool,
  },
  getDefaultProps: function() {
    return {
      fzClass:'ui-reddot',
      classPrefix: 'ui-reddot'
    };
  },

  renderReddot: function(classSet) {
    let Component = this.props.componentTag || 'div';
    

    return (
      <Component
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
        <ReddotStatic />
      </Component>
    );
  },

  render: function() {
    var classSet = this.getClassSet(true);
    return this.renderReddot(classSet);
  }
  
});

module.exports = Reddot;