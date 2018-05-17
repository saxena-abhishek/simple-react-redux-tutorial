import React, {Component} from "react";
import GreetUser from "./GreetUser";

class Greeting extends Component{
    render(){
        return(
            <div>
                Greeting Component
                <GreetUser fetchUsername = {this.props.fetchUsername}/>
            </div>
        )
    }
}

export default Greeting;