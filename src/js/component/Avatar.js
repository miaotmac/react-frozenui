'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('../mixins/ClassNameMixin');

var Avatar = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
  },

  getDefaultProps: function() {
    return {
      fzClass:'ui-avatar',
      classPrefix: 'ui-avatar'
    };
  },

  renderAvator: function(classSet) {
    var Component = this.props.componentTag || 'div';

    return (
      <Component
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
      </Component>
    );
  },

  render: function() {
    var classSet = this.getClassSet(true);
    return this.renderAvator(classSet);
  }
});

module.exports = Avatar;