// Code EyesOnMe Component Here

import React, { Component } from 'react';
class EyesOnMe extends Component {

    getFocus = () => {
        console.log('Good!');
    }

    getBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button 
                onFocus={this.getFocus}
                onBlur={this.getBlur}
            >
            </button>
        );
    }
}

export default EyesOnMe;