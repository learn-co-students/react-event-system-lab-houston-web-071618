import React, {Component} from 'react'

class Keypad extends Component {
  password = () => {
    console.log("Entering password...")
  }

  render () {
    return (
      <input onKeyUp={this.password} type="password" />
    )
  }
}

export default Keypad
