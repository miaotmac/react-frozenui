'use strict';

let React = require('react');
let classNames = require('classnames');
let ClassNameMixin = require('../mixins/ClassNameMixin');
let omit = require('object.omit');


let LabelList = React.createClass({
  mixins: [ClassNameMixin],
  getDefaultProps: function() {
    return {
      fzClass:'ui-label-list',
    };
  },

  render: function() {
    let classSet = this.getClassSet(true);
    return (
      <div
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
      </div>
    );
  }
  
});

module.exports = Reddot;