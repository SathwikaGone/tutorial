import React, { Component } from "react";

export default class handlingEvents extends Component {
  state = {
    name: "Sathwika",
  };
  handleEvent = (id) => {
    this.setState({ name: id });
  };

  handleeve(item, id) {
    this.setState({ name: id });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleEvent("Rao")}>handleEvent</button>
        <button onClick={() => this.handleeve(this, "Rao")}>handleeve</button>
        {this.state.name}
      </div>
    );
  }
}
