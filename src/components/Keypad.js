// Code Keypad Component Here

import React, { Component } from 'react';

class Keypad extends Component {


    grabPassword = () => {
        console.log('Entering password...');
    }

    render() {
        return (
            <input 
                type="password"
                // value={this.props.password}
                onKeyUp={this.grabPassword}
            />
        );
    }
}

export default Keypad;

// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.