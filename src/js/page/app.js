var React = require('react'),
    SearchBar = require('../component/SearchBar'),
    List = require('../component/List/List'),
    ListItem = require('../component/List/ListItem'),
    PureList = require('../component/List/PureList')
    ,Dialog = require('../component/Dialog')
    ;
var wrap = document.querySelector('.wrap');

var ListInstance = (
  <div>
        <section class="ui-container">
            <List fzStyle="pure">
                <ListItem>
                     <p><span>1.faycheng </span><span class="date"> 2月12日</span></p>
                     <h4>这本书太赞了dddd，每次看都有不一样的体会和感悟，超级喜欢！期待大结局。</h4>
                </ListItem>
                <ListItem>
                        <p><span>2.faycheng </span><span class="date"> 2月12日</span></p>
                         <h4>标题标题标题标题ccccc标题标题题标题标题标题标题ddddd标题标题标题标题标题</h4>
                </ListItem>
            </List>
        </section>
  </div>
);

var data = [
	{title:'1.faycheng',date:'2月12日',content:'这本书太赞了，每次看都有不ssss一样的体会和感悟，超级喜欢！期待大结局。'},
	{title:'2.faycheng',date:'2月12日',content:'这本书太赞了，每次看都有不一样的sdfsdfsd体会和感悟，超级喜欢！期待大结局。'}
]
var pureListInstance = (
  <div>
        <section class="ui-container">
            <PureList data={data} />
        </section>
  </div>
);

var buttonsInstance = (
  <SearchBar searchText="qingshuru" placeholder="qingshuru" type="num" cancelText="qqxiao"/>
);

var handleDialogClick = function() {
  this.refs.ddialog.setState({show:true});
};

var dialogInstance = (
    <div>  
    <button type= "button" onclick = "handleDialogClick()" >clicqqkddd</button>
    <Dialog ref = "ddialog" content ="内容" title = "标题" />
    </div>
  );

React.render(
    dialogInstance, wrap
);

