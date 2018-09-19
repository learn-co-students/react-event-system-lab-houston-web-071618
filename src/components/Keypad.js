// Code Keypad Component Here
import React, { Component } from 'react' 
class Keypad extends Component {
  render() {
    return (
      <div>
        <p>Enter password:</p>
        <input type="password" onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }

  handleKeyUp = (e) => {
    console.log('Entering password...')
  }
}

export default Keypad