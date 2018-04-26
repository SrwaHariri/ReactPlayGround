import React from "react";
const person = props => {
  return (
    <div>
      <p onClick={props.blik} className={props.className}>
        Hi, my name is {props.name} and iam {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
