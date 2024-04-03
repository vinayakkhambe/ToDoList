import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
       
      ]
    };
  }
  handleAdd = (text) => {
    // complete the function to add a new Todo to the list
   
    if(text === "")
    {
      console.log(this.state);
      return
    }
    this.state.todos.push({text:text})
    
    this.setState({todos:this.state.todos})
    console.log(this.state)
  };

  handleRemove = (index) => {
    // complete the function to remove the Todo from the list
    delete this.state.todos[index];
    this.setState({todos:this.state.todos})
    console.log(this.state)
  };
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form   todos={this.state.todos}  handleAdd = {this.handleAdd} />
        <List todos={this.state.todos} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
