import React, {Component} from "react";

class GreetUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "abhishek"
        }
    }

    changeUserName = (props) => {
        this.setState({
            name: props.name
        }, function(){
            this.props.fetchUsername(this.state.name);
        })
    }

    render(){
        return(
            <div>
                <input  onChange = {(event)=> this.changeUserName({name : event.target.value})}/>
            </div>
        )
    }
}

export default GreetUser;