import React, { Component } from 'react';
import TodoListItem from  './TodoListItem';
import PropTypes from 'prop-types';

class TodoList extends Component {

  render() {
    return this.props.todos.map((todo) => (
      <TodoListItem key={ todo.id } todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList;
