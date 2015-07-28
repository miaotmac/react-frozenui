'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('../mixins/ClassNameMixin');

var Button = React.createClass({
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
      <Component
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
      </Component>
    );
  },

  render: function() {
    var classSet = this.getClassSet(true);
    return this.renderButton(classSet);
  }
});

module.exports = Button;