import React, { Component } from 'react'

export class AddNewTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' })

  }

  onChange = (e) => this.setState({ title: e.target.value });
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <input 
                type="text" 
                name="title" 
                placeholder="Anything to do?" 
                style={{flex: '10', padding: '5px'}}
                value={this.state.title}
                onChange={this.onChange}
            />
            <input  type="submit" 
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}} />
        </form>
      </div>
    )
  }
}

export default AddNewTodo
