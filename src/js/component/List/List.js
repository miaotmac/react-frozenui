'use strict';

let React = require('react');
let classNames = require('classnames');
let ClassNameMixin = require('../../mixins/ClassNameMixin');
let ListItem = require('./ListItem');


let List = React.createClass({
  mixins: [ClassNameMixin],
  getDefaultProps: function() {
    return {
      fzClass:'ui-list',
      classPrefix:'ui-list'
    };
  },
  propTypes: {
    fzStyle: React.PropTypes.string.isRequired
  },
  render: function() {
    let classSet = this.getClassSet(true);
    classSet = classNames(classSet,"ui-border-tb");
    return (
      <ul {...this.props} className={classNames(this.props.className, classSet)}>
          {this.props.children}
      </ul>
    );
  }
  
});

module.exports = List;


