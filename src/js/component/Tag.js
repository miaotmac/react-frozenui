'use strict';

let React = require('react');
let classNames = require('classnames');
let ClassNameMixin = require('../mixins/ClassNameMixin');

let Tag = React.createClass({
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
      <li>
        <div 
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
        </div>
      </li>
    );
  },

  render: function() {
    let classSet = this.getClassSet(true);
    return this.renderTag(classSet);
  }
  
});

module.exports = Tag;