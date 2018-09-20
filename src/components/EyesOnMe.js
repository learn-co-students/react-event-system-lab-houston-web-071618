import React from "react";

class EyesOnMe extends React.Component {
  handleBlur = () => {
    console.log("Hey! Eyes on me!");
  };
  handleFocus = () => {
    console.log("Good!");
  };

  render() {
    return (
      <div>
        <button onBlur={this.handleBlur} onFocus={this.handleFocus} />
      </div>
    );
  }
}

export default EyesOnMe;
