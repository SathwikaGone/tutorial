import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    gotData: "",
  };
  gotData = (input) => {
    this.setState({ gotData: input });
  };
  render() {
    return (
      <div>
        <p> parent - child "Props"</p>
        <p> child - parent "callbacks"</p>
        <p>this is parent</p>
        {this.state.gotData ? this.state.gotData : null}
        <Child name="Rakesh" sendDataToParent={this.gotData} />
      </div>
    );
  }
}
