import React, { Component } from 'react';
import Greeting from "./components/Greeting";
import ListOfPerson from "./components/ListOfPerson";
import { connect } from 'react-redux';
import {addUserName} from "./action";




class App extends Component {

  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      greetUser: "Abhishek Saxena"
    }



  }

  fetchUsername = (props) => {
    this.setState({
      greetUser: props
    }, function(){
      this.props.toggleTodo(this.state.greetUser);
    });
    
  }

  render() {
    console.log("App render method = ", this.props.todos);
    return (


      <div >
        <Greeting fetchUsername={this.fetchUsername} />
        <hr />
        <ListOfPerson greetUser={this.props.todos} />
      </div>


    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.toggleTodo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: (id) => {console.log("id check = ", id); dispatch(addUserName(id)) }
  }
}


const myApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


export default myApp;
