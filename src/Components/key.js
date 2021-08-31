import React from "react";

function Key (props) {
    return (
      <td id={props.id}
        onClick={() => props.setScreenText(props.name)}
        rowSpan={props.name === "+" ? 2 : 1}
      >
      {props.name}</td>
    );
  }


Key.defaultProps = {
};

export default Key;
