
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
            show:this.props.show
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

    handleClick : function(i){
        this.props.handleButtonClick && 
         typeof this.props.handleButtonClick[i] == "function"
         && this.props.handleButtonClick[i]();
         this.setState({show:false});
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
                        {
                            this.props.buttons ? this.props.buttons.map(function(item,index){
                               return (<button type="button" data-index = {index} data-role="button" onClick = {this.handleClick.bind(this,index)} className="select" >{item}</button> )
                             },this)
                         :
                            <button type="button" data-role="button"  onClick = {this.handleClick} class="select" >{this.props.buttonText}</button> 
                        }
                    </div>
                </div>        
            </div>
        );
    }
});

module.exports = Dialog;