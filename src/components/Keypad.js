// Code Keypad Component Here
import React, {Component} from 'react';
import EyesOnMe from './EyesOnMe';

export default class Keypad extends Component{

  handleKeyUpEvent = () =>
    console.log('Entering password...')
  

  render(){
    return(
      <div>
        <input onKeyUp={this.handleKeyUpEvent} type="password" />
      </div>
    )
  }

}
