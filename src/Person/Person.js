import React from "react";
import "./Person.css";
const person = props => {
  return (
    <div className="Person">
      <p onClick={props.blik} className={props.className}>
        Hi, my name is {props.name} and iam {props.age} years old
      </p>
      <p>{props.children}</p>
      <input
        className="input"
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default person;
