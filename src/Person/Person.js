import React from "react";
import "./Person.css";
const person = props => {
  return (
    <div className="Person">
  {/* saying that this paragraph will accept function in future*/}
      <p onClick={props.blik} className={props.className}>
        {props.name} {props.age} 
      </p>
      <p >{props.children} </p>
    </div>
  );
};

export default person;
