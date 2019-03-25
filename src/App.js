import React, { Component } from "react";
import "./App.css";
import Form from "./conditionalForms/Form";
import Heart from "./Heart/Heart";
import Ms from "./MultiSpinner/MultiSpinner";


class App extends Component {
  render() {
    return (
     <div className="app">
       <Heart />
       <Ms />
       {/* <Form /> */}
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
