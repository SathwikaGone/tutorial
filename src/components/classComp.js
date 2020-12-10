import React, { Component } from "react";

export default class classComp extends Component {
  state = {
    data: [],
  };

  handleSubmit = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((ress) => this.setState({ data: ress }))
      .catch((error) => console.log(error));
  };

  handleSubmitt = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let apiPath = "";
    // GET
    fetch(apiPath, {
      method: "GET",
      headers: myHeaders,
    });

    let formBody = {
      id: "",
      name: "",
      age: "",
    };

    //post
    fetch(apiPath, {
      method: "POST",
      body: JSON.stringify(formBody),
      headers: myHeaders,
    });

    //put
    fetch(apiPath, {
      method: "PUT",
      body: JSON.stringify(formBody),
      headers: myHeaders,
    });

    //delete
    fetch(apiPath, {
      method: "DELETE",
      body: JSON.stringify(formBody),
      headers: myHeaders,
    });
  };

  render() {
    console.log("data", this.state.data);
    return (
      <div>
        <h1> class Component:</h1>
        <li>we will have render</li>
        <li>we can create state</li>
        <li>we can use life cycle methods</li>

        <button onClick={this.handleSubmit}>click</button>
      </div>
    );
  }
}
