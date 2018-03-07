import React, { Component } from 'react';

import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {           //constructor method
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: ' '
    };
  }

  toggleComplete(index) {          //event handler as a class method on the App component
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos});
  }

  deleteToDo(index) {
    console.log("deleteToDo has been executed");
    console.log(this.state.todos[index]);
    console.log(index);
    const deleteArray = this.state.todos.filter((item) => this.state.todos.indexOf(item) !== index)
    console.log(deleteArray);
    this.setState({ todos: deleteArray});
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('[' + this.state.newTodoDescription + ']'); //to verify value
    if (this.state.newTodoDescription===' ') { return }; // had to change. . . provided 'if' statement didn't work
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }
 

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
          <ToDo key={ index } description={ todo.description } isCompleted={todo.isCompleted }
          toggleComplete={ () => this.toggleComplete(index) } deleteToDo={ () => this.deleteToDo(index) }/>
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type = "text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type = "submit" />
          </form>

      </div>
    );
  }
}

export default App;
