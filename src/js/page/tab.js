var React = require('react'),
    TagList = require('../component/TagList');
    Tag = require('../component/Tag');

var wrap = document.querySelector('.wrap');

var buttonsInstance = (
  <div>
        <section class="ui-container">
            <TagList>
                <Tag fzStyle = "selected" ></Tag>
            </TagList>
        </section>
  </div>
);

React.render(
    buttonsInstance, wrap
);

