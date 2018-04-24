import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "bestoun", age: 34 },
      { name: "srwa", age: 28 },
      { name: "parycka", age: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1> Hi, iam areact app</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          i want to be a ballerina
        </Person>
      </div>
    );
    /* return React.createElement(
       "div",
       { className: "App" },
       React.createElement("h1", null, "yolo")
    );
    */
  }
}

export default App;
