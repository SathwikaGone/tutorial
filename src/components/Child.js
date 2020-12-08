import React, { Component } from "react";

export default class compBProps extends Component {
  state = {
    name: this.props.name,
    sendName: "boby",
  };

  sendDataToParent = () => {
    this.props.sendDataToParent(this.state.sendName);
  };

  render() {
    return (
      <div>
        Child {this.state.name}
        <button onClick={this.sendDataToParent}>send data to parent</button>
      </div>
    );
  }
}
