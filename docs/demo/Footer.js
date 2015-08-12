let React = require('react');
let Footer = React.createClass({
		render:function(){
			return (
				        <div className="foot-area">
				          <div className="fr-info">
				              <div className="info-item">
				                  <span className="qq-logo"></span>：427632094
				              </div>
				          </div>
				            
				          <div className="fr-introduce">
				            <div className="introduce-content">
				              <h3>FrozenUI是什么</h3>
				              <p>FrozenUI是什么 Frozen UI是一个开源的简单易用，轻量快捷的移动端UI框架。基于手Q样式规范，选取最常用的组件，</p>
				              <p>做成手Q公用离线包减少请求，升级方式友好，文档完善，目前全面应用在腾讯手Q增值业务中。</p>

				              <div className="bottom-info">
				                  <div className="links">
				                      <a href="">GitHub</a> • <a href="">nico</a> • <a href="">Issues</a> • <a href="">QQVIP FD Team</a>
				                  </div>
				                  <div className="copyright">
				                      © 2015  QQVIP FD Team
				                  </div>
				              </div>

				            </div>
				          </div>
				        </div>
			);
		}
	});

module.exports = Footer;