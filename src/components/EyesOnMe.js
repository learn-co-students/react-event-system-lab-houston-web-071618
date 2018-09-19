import React, {Component} from 'react'

class EyesOnMe extends Component {
  goodText = () => {
    console.log("Good!")
  }

  badText = () => {
    console.log("Hey! Eyes on me!");
  }

  render () {
    return (
      <button onFocus={this.goodText} onBlur={this.badText}>Good</button>
    )
  }
}

export default EyesOnMe
