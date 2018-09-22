// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component{

handleOnBlurEvent = () =>
  console.log('Hey! Eyes on me!')


handleOnFocusEvent = () =>
  console.log('Good!')


render(){
  return(
      <button onBlur={this.handleOnBlurEvent} onFocus ={this.handleOnFocusEvent}></button>
  )
}

}
