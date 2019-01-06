import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/layout/Header';
import AddNewTodo from './components/AddNewTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Pay bills',
        completed: false
      },
      {
        id: 2,
        title: 'Study about React',
        completed: false
      },
      {
        id: 3,
        title: 'Take a rest',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState( {todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })
    });
  }

  delTodo = (id) => {
    this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddNewTodo />
          <TodoList todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
