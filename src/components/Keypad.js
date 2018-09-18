import React, { Component } from 'react'

class Keypad extends Component {
  render () {
    return (
      <div>Password:
      <input type="password" name="passwordInput" onKeyUp={this.handleKeyUp} />
      </div>
    )
  }

  handleKeyUp = (event) => {
    console.log('Entering password...')
  }
}

export default Keypad
