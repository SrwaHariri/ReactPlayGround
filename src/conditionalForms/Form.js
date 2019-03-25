import React, { Component } from "react";
import "./form.css";
import Person from "../Person/Person";

class Form extends Component {
  state = {
    persons: [
      { name: "bestoun", age: 34 },
      { name: "srwa", age: 28 },
      { name: "parycka", age: 3 }
    ],
    showPersons: false
  };
  switchNameHandler = newName => {
    // console.log("clicked!");
    // DON'T DO THIS: this.state.persons[0].name="someNewName"
    this.setState({
      persons: [
        { name: newName, age: 34 },
        { name: "daya", age: 28 },
        { name: "parygull", age: 4 }
      ]
    });
  };
  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "bestoun", age: 34 },
        { name: event.target.value, age: 28 },
        { name: "parygull", age: 3 }
      ]
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const someStyle = {
      color: "#f0b27a"
    };
    return (
      <div className="App">
        <h1 style={someStyle}> React PlayGround</h1>
        <button onClick={this.togglePersonHandler} className="button-style">
          Switch names
        </button>
        {this.state.showPersons === true ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              className="person1"
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              // this is for changing the array index[0] wich is the first person
              //the bind is for binding th evalue of newName in switch handler method
              blik={this.switchNameHandler.bind(this, "bawa aziz")}
              changed={this.nameChangeHandler}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            >
              i want to be a ballerina
            </Person>
          </div>
        ) : null}
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

export default Form;
