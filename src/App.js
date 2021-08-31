/* eslint-disable no-eval */
import React, { useState } from "react";
import img from "./images/calculator.png";
import titleImg from "./images/title.png"
import githubImg from "./images/github.png"
import reactBigImg from "./images/reactGreen.png"
import KeyPad from "./Components/keyPad";
import Screen from "./Components/screen";

function App() {
  const [screenText, changeScreenText] = useState("");
  const [screenBlink, changeScreenBlink] = useState("");
  const [display, changeDisplay] = useState("block");

  // Error Message Blinker
  function blinkText(text) {
    changeScreenText(text);
    changeScreenBlink("blink");
    navigator.vibrate([350,50,350,50,350])
    // clears screen after 2 sec
    setTimeout(() => {
      changeScreenText("");
      changeScreenBlink("");
    }, 2000);
  }

  // Main Button Handler
  function setScreenText(buttonName) {
    navigator.vibrate(100);
    if (buttonName === "=") {
      try {
        let res = eval(screenText);
        if (res === undefined) {
          changeScreenText("");
        } else if (isNaN(res)) {
          blinkText("Math Error");
        } else {
          changeScreenText(res);
        }
      } catch (err) {
        blinkText("Syntax Error");
      }
    } else if (buttonName === "⬅") {
      changeScreenText(screenText.slice(0, -1));
    } else if (buttonName === "C") {
      changeScreenText("");
    } else if (buttonName === "On/Off") {
      changeScreenText("");
      display === "block" ? changeDisplay("none") : changeDisplay("block");
    } else if (buttonName === "x") {
      changeScreenText(screenText + "*");
    } else {
      changeScreenText(screenText + buttonName);
    }
  }
  // Evaluates the expression when Enter key pressed
  function onEnterPress(e) {
    if (e.key === 'Enter') {
      setScreenText('=');
    }
  }
  
  return (
    <div id="wrapper">
      <div id="reactBigLogo">
        <img id="reactBigImg" src={reactBigImg} alt="React Logo Background"/>
      </div>
      <div id="title">
        <img id="titleImg" src={titleImg} alt="" />
        <a href="https://github.com/Sheikh566">
          <img id="github" src={githubImg} alt=""/>
        </a>
      </div>
      <div id="imgContainer">
        <img id="img" src={img} alt="CalculatorPNG"></img>
      </div>
      <div id="calc">
        <span
          id="lightCover"
          style={{ display: display === "block" ? "none" : "block" }}
        ></span>
        <div id="screenContainer">
          <Screen
            display={display}
            screenText={screenText}
            blink={screenBlink}
            changeScreenText={changeScreenText}
            onEnterPress={onEnterPress}
          />
        </div>
        <KeyPad setScreenText={setScreenText} />
      </div>
    </div>
  );
}

export default App;
