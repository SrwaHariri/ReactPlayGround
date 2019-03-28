import React from "react";
import "./Dots.css";
const Dots = props => {
    return (
        <div className="loader-main-wrapper" className={props.className}>
          <div className="loader-wrapper">
            <div className="dot-loader"/>
            <div className="dot-loader dot-loader--2"/>
            <div className="dot-loader dot-loader--3"/>
          </div>
        </div>
      )
    }

export default Dots ;
