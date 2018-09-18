import React, { Component } from 'react'

class EyesOnMe extends Component {
  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Focus!</button>
    )
  }

  handleFocus = (event) => {
    console.log('Good!')
  }

  handleBlur = (event) => {
    console.log('Hey! Eyes on me!')
  }
}

export default EyesOnMe
