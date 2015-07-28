'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('../mixins/ClassNameMixin');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var SearchBar = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    searchText: React.PropTypes.string,
    placeholder: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      searchText:'搜索号码（2-10位）',
      placeholder: '搜索号码（2-10位）',
      type: 'tel',
      cancelText: '取消',
      autocapitalize:'off'
    };
  },

  getInitialState:function() {
    return {
      isFocus:false
    }
  },

  handleTouchTap:function(){
      this.refs.theSearchbarInput.getDOMNode().focus();
      this.setState({isFocus:true});
  },

  handleTouchTapCancel:function(){
      this.setState({isFocus:false});
  },

  renderSearchBar: function(classSet) {
    return (
      <div className={classNames(this.props.className, classNames("ui-searchbar-wrap ui-border-b",{focus: this.state.isFocus}))}>
        <div className="ui-searchbar ui-border-radius" onTouchTap = {this.handleTouchTap}>
            <i className="ui-icon-search"></i>
            <div className="ui-searchbar-text">{this.props.searchText}</div>
            <div className="ui-searchbar-input"><input ref = "theSearchbarInput" value="" type={this.props.type} placeholder={this.props.placeholder} autocapitalize="off" /></div>
            <i className="ui-icon-close"></i>
        </div>
        <button className="ui-searchbar-cancel" onTouchTap = {this.handleTouchTapCancel}>{this.props.cancelText}</button>
      </div>
    );
  },

  render: function() {
    var classSet = this.getClassSet(true);
    return this.renderSearchBar(classSet);
  }
});

module.exports = SearchBar;