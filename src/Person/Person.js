import React from "react";
import "./Person.css";
const person = props => {
  return (
    <div className="Person">
      <p onClick={props.blik} className={props.className}>
        {props.name} {props.age} 
      </p>
      <p >{props.children} </p>
    </div>
  );
};

export default person;
