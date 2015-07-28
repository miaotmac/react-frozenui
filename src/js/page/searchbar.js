var React = require('react'),
    SearchBar = require('../component/SearchBar');

var wrap = document.querySelector('.wrap');

var buttonsInstance = (
  <SearchBar searchText="qingshuru" placeholder="qingshuru" type="num" cancelText="qqxiao"/>
);

React.render(
    buttonsInstance, wrap
);

