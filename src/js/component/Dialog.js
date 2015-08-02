/**
 * Created by vajoylan on 2015/7/7.
 */

var globalEventHandler = require('../component/globalEventHandler');
var React = require('react'),
    classNames = require('classnames'),
    PropTypes = React.PropTypes;

var Dialog = React.createClass({
    propTypes: {
        title: PropTypes.string, 
        content: PropTypes.string
    },
    getDefaultProps: function () {
        return {
        }
    },
    getInitialState: function () {
        return {
            show:false
        }
    },
   
    renderChild : function(children) {
            if(!children) {
                return  (<div>
                            <h4>{this.props.title}</h4>
                            <div>{this.props.content}</div>
                        </div>);
            }

            return children;
    },



    render: function () {
        return (
            <div  className={classNames("ui-dialog",{show:this.state.show})}>
                <div className="ui-dialog-cnt">
                    <div className="ui-dialog-bd">
                       {
                           this.props.children ? this.props.children : (<div>
                                <h4>{this.props.title}</h4>
                                <div>{this.props.content}</div>
                            </div>)
                       }
                    </div>
                    <div className="ui-dialog-ft ui-btn-group">
                        <button type="button" data-role="button"  class="select" >关闭</button> 
                    </div>
                </div>        
            </div>
        );
    }
});

module.exports = Dialog;