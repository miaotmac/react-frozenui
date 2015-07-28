var React = require('react'),
    Button = require('../component/Button');

var wrap = document.querySelector('.wrap');

var buttonsInstance = (
  <div>
        <section class="ui-container">
			<section id="btn">
			    <div class="demo-item">
			        <p class="demo-desc">普通小按钮</p>
			        <div class="demo-block">
			            <div class="ui-btn-wrap">
			                <Button componentTag = "a" fzSize="s">
			                    确定
			                </Button>
			                <Button fzSize="s" active>
			                    确定
			                </Button>
			                <Button fzSize="s" disabled>
			                    取消
			                </Button>
			                <Button fzSize="s" disabled>
			                    取消
			                </Button>
			            </div>
			        </div>
			    </div>
			    <div class="demo-item">
			        <p class="demo-desc">普通按钮</p>
			        <div class="demo-block"> 
			            <div class="ui-btn-wrap">
			                <Button >
			                    确定
			                </Button>
			                <Button active>
			                    确定
			                </Button>
			                <Button disabled>
			                    取消
			                </Button>
			            </div>
			        </div>
			    </div>
			    <div class="demo-item">
			        <p class="demo-desc">带进度的按钮</p>
			        <div class="demo-block"> 
			            <div class="ui-btn-wrap">
			                <Button fzStyle="progress">确定</Button>
			                <Button fzStyle="progress">
			                    <span class="ui-btn-inner" ><span>50%</span></span>
			                </Button>
			                <Button fzStyle="progress" disabled>取消</Button>
			            </div>
			        </div>
			    </div>
			    <div class="demo-item">
			        <p class="demo-desc">蓝色按钮</p>
			        <div class="demo-block"> 
			            <div class="ui-btn-wrap">
			                <Button fzStyle="primary">
			                    确定
			                </Button>
			                <Button fzStyle="primary" active>
			                    确定
			                </Button>
			                <Button fzStyle="primary" disabled>
			                    取消
			                </Button>
			            </div>
			        </div>
			    </div>
			    <div class="demo-item">
			        <p class="demo-desc">红色按钮</p>
			        <div class="demo-block"> 
			            <div class="ui-btn-wrap">
			                <Button fzStyle="danger">
			                    确定
			                </Button>
			                <Button fzStyle="danger" active>
			                    确定
			                </Button>
			                <Button fzStyle="danger" disabled>
			                    取消
			                </Button>
			            </div>
			        </div>
			    </div>
			    <div class="demo-item">
			        <p class="demo-desc">普通大按钮</p>
			        <div class="demo-block"> 
			            <div class="ui-btn-wrap">
			                <Button fzSize = "lg" >
			                    确定
			                </Button>
			            </div>
			            <div class="ui-btn-wrap">
			                <Button fzSize = "lg"  active>
			                    确定
			                </Button>
			            </div>
			            <div class="ui-btn-wrap">
			                <Button fzSize = "lg"  disabled>
			                    取消
			                </Button>
			            </div>
			        </div>
			    </div>
			    <div class="demo-item">
			        <p class="demo-desc">蓝色大按钮</p>
			        <div class="demo-block"> 
			            <div class="ui-btn-wrap">
			                <Button fzSize = "lg" fzStyle = "primary">
			                    确定
			                </Button>
			            </div>
			            <div class="ui-btn-wrap">
			                <Button fzSize = "lg" fzStyle = "primary" active>
			                    确定
			                </Button>
			            </div>
			            <div class="ui-btn-wrap">
			                <Button fzSize = "lg" fzStyle = "primary" disabled>
			                    取消
			                </Button>
			            </div>
			        </div>
			    </div>
			    <div class="demo-item">
			        <p class="demo-desc">红色大按钮</p>
			        <div class="demo-block"> 
			            <div class="ui-btn-wrap">
			                <Button fzSize = "lg" fzStyle = "danger">
			                    确定
			                </Button>
			            </div>
			            <div class="ui-btn-wrap">
			                <Button fzSize = "lg" fzStyle = "danger"  active>
			                    确定
			                </Button>
			            </div>
			            <div class="ui-btn-wrap">
			                <Button fzSize = "lg" fzStyle = "danger" disabled>
			                    取消
			                </Button>
			            </div>
			        </div>
			    </div>
			    <div class="demo-item">
			        <p class="demo-desc">普通按钮组</p>
			        <div class="demo-block">  
			            <div class="ui-btn-group">
			                <Button fzSize = "lg">
			                    拒绝
			                </Button>
			                <Button fzSize = "lg" >
			                    拒绝
			                </Button>
			                <Button fzSize = "lg"  fzStyle = "primary" >
			                    同意
			                </Button>
			            </div>
			        </div>
			    </div>
			    <div class="demo-item">
			        <p class="demo-desc">底部按钮组</p>
			        <div class="demo-block">       
			            <div class="ui-footer ui-footer-stable ui-btn-group ui-border-t">
			                <Button fzSize = "lg">
			                    拒绝
			                </Button>
			                <Button fzSize = "lg">
			                    拒绝
			                </Button>
			                <Button fzSize = "lg" fzStyle = "primary">
			                    同意
			                </Button>
			            </div>
			        </div>
			    </div>
			</section>
        </section>
  </div>
);

React.render(
    buttonsInstance, wrap
);

