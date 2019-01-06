import React, { Component } from 'react'

export class AddNewTodo extends Component {
  render() {
    return (
      <div>
        <form style={{display: 'flex'}}>
            <input 
                type="text" 
                name="title" 
                placeholder="Anything to do?" 
                style={{flex: '10', padding: '5px'}}
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
