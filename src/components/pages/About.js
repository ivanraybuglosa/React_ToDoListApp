import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
          <div style={fragmentStyle}>
            <h1>About To do List</h1>
            <p>This is a simple to do list application built in ReactJS</p>
          </div>
      </React.Fragment>
    )
  }
}
const fragmentStyle = {
  textAlign: 'center',
  marginTop: 20
}
