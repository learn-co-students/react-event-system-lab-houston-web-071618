// Code EyesOnMe Component Here
import React, { Component } from 'react'
  class EyesOnMe extends Component {

      handleBlur = () => {
        console.log("Hey! Eyes on me!")
      }

      handleFocus = () => {
        console.log("Good!")
      }
      render() {
      return (
        <div className='EyesOnMe'>
          <button type="submit" onFocus={this.handleFocus} onBlur={this.handleBlur}>Eyes On Me</button>
        </div>
      )
    }
  }

export default EyesOnMe;
