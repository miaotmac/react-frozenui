'use strict';

let React = require('react');
let classNames = require('classnames');
let ClassNameMixin = require('../mixins/ClassNameMixin');

let Label = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      fzClass:'ui-label',
      classPrefix: 'ui-label'
    };
  },

  renderLabel: function(classSet) {
    return (
      <label
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
      </label>
    );
  },

  render: function() {
    let classSet = this.getClassSet(true);
    return this.renderLabel(classSet);
  }
  
});

module.exports = Label;