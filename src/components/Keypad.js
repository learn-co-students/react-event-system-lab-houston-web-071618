import React, { Component } from 'react'

export default class Keypad extends Component {

  printPassword = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.printPassword} type="password" />
    )
  }

}
