import React, { Component } from "react";
import "./form.css";
import Person from "../Person/Person";
import Input from "../Inputs/Inputs";

class Form extends Component {
  state = {
    //some data to start with 
    persons: [
      { name: "Bestoun" ,age:34},
      { name: "Srwa" ,age:28 },
      { name: "pary",age:4}
    ],
    showPersons: false
  };
  toggleCardsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  switchNameHandler = newName => {
    // console.log("clicked!");
    // DON'T DO THIS: this.state.persons[0].name="someNewName"
    this.setState({
      persons: [
        { name: newName },
        { name: "rebeca  ", age: "rabit" },
        { name: "suzy", age: "sheep" }
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

  

  render() {
    const someStyle = {
      color: "#f0b27a"
    };
    let persons =null;
  if (this.state.showPersons){
    persons = (
      <div>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />
      <Person
     
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        // this is for changing the array index[0] wich is the first person
       >
        <Input changed={this.nameChangeHandler} /> 
        u can also change this one by typing new name
       </Person>
      <Person
         className="person1"
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}

       //the bind is for binding th evalue of newName in switch handler method
        blik={this.switchNameHandler.bind(this, "peppa pig")}
       //we dont add paranthesis because we dont want to exectute the fuction right away we just want to pass a refrence to that function  
      >
     click to change the cards content
      </Person>
    </div>
    );
  }
    return (
      <div className="App">
        <h1 style={someStyle}> Srwa's React PlayGround</h1>
        <button onClick={this.toggleCardsHandler} className="button-style">
          Toggle cards 
        </button>
     
        {persons} 
     
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
