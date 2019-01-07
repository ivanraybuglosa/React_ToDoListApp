import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/layout/Header';
import AddNewTodo from './components/AddNewTodo';
import uuid from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Pay bills',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Study about React',
        completed: false
      },
      {
        id: uuid.v4(),
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

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      //title: title 
      //ES6 standard: if key and value is equal you can put it once
      title, 
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* //Route for root path */}
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddNewTodo addTodo={this.addTodo}/>
                <TodoList todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            {/* Route for about path */}
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
