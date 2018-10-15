import React from "react";
import "./Input.css";
const Inputs = props => {
  return (  
      <input
        className="input"
        type="text"
        onChange={props.changed}
        value={props.name}
      />
  );
};

export default Inputs;
