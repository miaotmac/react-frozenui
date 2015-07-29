'use strict';

let React = require('react');
let classNames = require('classnames');
let ClassNameMixin = require('../mixins/ClassNameMixin');
let ListItem = React.createClass({
  mixins: [ClassNameMixin],

  render: function() {
    let classSet = this.getClassSet(true);
    classSet = classnames(classSet,"ui-border-tb");
    return (
      <li {...this.props} className={classNames(this.props.className, classSet)}>
          {this.props.children}
      </li>
    );
  }
  
});

module.exports = ListItem;
