import React, { Component } from "react";
import ClassComp from "./classComp";
import FuncComp from "./funcComp";

export default class conditionalRender extends Component {
  state = {
    comp: true,
  };
  RendorComp = () => {
    this.setState({ comp: !this.state.comp });
  };

  render() {
    return (
      <div>
        <button onClick={this.RendorComp}>
          {this.state.comp ? "class" : "function"}
        </button>
        {this.state.comp ? <FuncComp /> : <ClassComp />}
      </div>
    );
  }
}

// {
//   conditon ? "xxx" : "yyy";
// }
