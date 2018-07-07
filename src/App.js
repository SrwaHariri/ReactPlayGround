import React, { Component } from "react";
import "./App.css";
import Form from "./conditionalForms/Form";

class App extends Component {
  render() {
    return (
     <div>
       <Form />
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
