var React = require('react'),
    TagList = require('../component/TagList');
    Tag = require('../component/Tag');

var wrap = document.querySelector('.wrap');
var spanStyle = {
    "background-image" : 'url(http://placeholder.qiniudn.com/290x160)'
};
var buttonsInstance = (
  <div>
        <section class="ui-container">
            <TagList>
                <Tag fzStyle = {["selected","vip","ddd"]}>
                    <span style = { spanStyle }></span>
                </Tag>
            </TagList>
        </section>
  </div>
);

React.render(
    buttonsInstance, wrap
);

