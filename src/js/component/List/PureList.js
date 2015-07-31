'use strict';

let React = require('react');
let classNames = require('classnames');
let ClassNameMixin = require('../../mixins/ClassNameMixin');
let List= require('./List');
let ListItem = require('./ListItem');


let PureList = React.createClass({
  mixins: [ClassNameMixin],
  getDefaultProps: function() {
    return {
      fzClass:'ui-list',
      classPrefix:'ui-list',
    };
  },

  render: function() {
    return (
      <List fzStyle="pure">
        {
          this.props.data.map(function(item){
            return (
                <ListItem>
                  <p><span>{item.title}</span><span class="date">{item.date}</span></p>
                  <h4>{item.content}</h4>
                </ListItem>
                );
          })
        }
      </List>
    );
  }
});

module.exports = PureList;


