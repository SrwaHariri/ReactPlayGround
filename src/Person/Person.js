import React from "react";
const person = props => {
  return (
    <div>
      <p>
        Hi, my name is {props.name} and iam {props.age} years old
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
