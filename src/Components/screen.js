/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Component } from "react";
import reactLogo from "../images/logo192.png";

class Screen extends Component {
  state = {
    blink: this.props.blink,
  };
  render() {
    const myStyle = {
      fontSize: this.props.screenText === "Syntax Error" ?
        "115px" : "125px",
      textAlign: this.props.screenText === "Math Error" ?
        "center" : "right",
      display: this.props.display,
    };
    return (
      <>
        <input
          type="text"
          id="screen"
          className={this.props.blink}
          onChange={(e) => this.props.changeScreenText(e.target.value)}
          value={this.props.screenText}
          style={myStyle}
          autocomplete="off"
          onKeyUp={(e) => this.props.onEnterPress(e)}
        ></input>
        <span style={{display: this.props.display}}>
          <img id="reactLogo" src={reactLogo} alt="spinning react logo" />
          <marquee width="60%" direction="right" height="100px" scrollamount="10" >
            POWERED BY REACT {" ".repeat(150)}  MADE BY SHEIKH ABDULLAH {" ".repeat(50)}
          </marquee>
        </span>
      </>
      );
  }
}

export default Screen;
