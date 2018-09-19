// Code EyesOnMe Component Here
import React, { Component } from 'react'
class EyesOnMe extends Component {
  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Enter</button>
    )
  }

  handleFocus = (e) => {
    console.log('Good!')
  }

  handleBlur = (e) => {
    console.log('Hey! Eyes on me!')
  }
}

export default EyesOnMe