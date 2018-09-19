// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  getKeyValue = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.getKeyValue}/>

      </div>
    )
  }

}
export default Keypad;
