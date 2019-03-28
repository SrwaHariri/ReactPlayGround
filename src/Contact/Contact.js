import React from 'react'
import "./contact.css";
import Heart from "../Heart/Heart";
import MS from "../MultiSpinner/MultiSpinner";
import Dots from "../Dots/Dots";
import Cs from "../Sirclespin/cs";
class Contact extends React.Component {
  render() {
    return <div>
    <h1 className="heading">Animation</h1>
    <div className="animation-flex">
    <Dots />
    <Cs/>
    <MS />
    <Heart />
    </div>
    </div>
  }
}
export default Contact