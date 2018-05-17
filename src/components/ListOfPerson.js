import React, {Component} from "react";


class ListOfPerson extends Component{
    render(){
        return(
            <div>
                List of person <br/> {this.props.greetUser}
            </div>
        )
    }
}

export default ListOfPerson;