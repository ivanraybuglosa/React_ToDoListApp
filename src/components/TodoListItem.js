import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoListItem extends Component {

  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc solid',
      textDecoration: this.props.todo.completed ? 'line-through': 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo  
    return (
      <div style={this.getStyle()}>
        <p>
          <input  type="checkbox" 
                  onChange={ this.props.markComplete.bind(this, id) }>
          </input>
          &nbsp;{ title }
          <span style={btnStyle} onClick={this.props.delTodo.bind(this, id)}><i className="fas fa-trash-alt"></i></span>
        </p>
      </div>
    )
  }
}

const btnStyle = {
  float: 'right',
  borderRadius: '50%',
  color: 'black',
  border: 'none',
  cursor: 'pointer'
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired
}

//inline CSS
// const itemColor = {
//   backgroundColor: '#f4f4f4'
// }

export default TodoListItem
