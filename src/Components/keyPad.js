import React from "react";
import Key from "./key";

export default function KeyPad (props) {
  const namesArray = [
    ["On/Off", "C", "⬅", "="],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "/"],
    ["1", "2", "3", "+"],
    ["0", ".", "-"],
  ];
  let keys = [];
  let counter = 0;
  // eslint-disable-next-line array-callback-return
  namesArray.map((row) => {
    let rowIndex = "row_" + namesArray.indexOf(row);
    keys.push(<tr key={rowIndex} id={rowIndex}>
      {row.map((label) => {
        let myId = "key_" + counter++;
        return (<Key key={myId}
                     id={myId}
                     name={label}
                     setScreenText={props.setScreenText}
                />)
          })
      }
    </tr>)
  })
  return (
    <table>
      <tbody>
        {keys}
      </tbody>
    </table>
  );
}

KeyPad.defaultProps = {
};
