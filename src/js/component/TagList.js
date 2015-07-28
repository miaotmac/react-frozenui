'use strict';

let React = require('react');
let classNames = require('classnames');
let ClassNameMixin = require('../mixins/ClassNameMixin');


let TagList = React.createClass({
  mixins: [ClassNameMixin],
  getDefaultProps: function() {
    return {
      fzClass:'ui-grid-halve',
    };
  },

  render: function() {
    let classSet = this.getClassSet(true);
    return (
      <ul
        {...this.props}
        className={classNames(this.props.className, classSet)}>
          {this.props.children}
      </ul>
    );
  }
  
});

module.exports = TagList;