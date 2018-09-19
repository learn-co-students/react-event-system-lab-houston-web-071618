// Code EyesOnMe Component Here
import React, { Component } from 'react'

  class EyesOnMe extends Component {
    onBlur = () => {console.log('Hey! Eyes on me!')}
    onFocus = () => {console.log('Good!')}
    render() {
      return (
        <div className='EyesOnMe'>
          <button onBlur={this.onBlur} onFocus={this.onFocus}>button</button>
        </div>
      )
    }
  }

export default EyesOnMe;
