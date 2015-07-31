var React = require('react'),
    List = require('../component/List/List');
    ListItem = require('../component/List/ListItem');

var wrap = document.querySelector('.wrap');

var buttonsInstance = (
  <div>
        <section class="ui-container">
            <List>
                <ListItem>
                     <p><span>1.faycheng </span><span class="date"> 2月12日</span></p>
                     <h4>这本书太赞了，每次看都有不一样的体会和感悟，超级喜欢！期待大结局。</h4>
                </ListItem>
                <ListItem>
                        <p><span>2.faycheng </span><span class="date"> 2月12日</span></p>
                         <h4>标题标题标题标题标题标题题标题标题标题标题标题标题标题标题标题</h4>
                </ListItem>
            </List>
        </section>
  </div>
);

React.render(
    buttonsInstance, wrap
);

