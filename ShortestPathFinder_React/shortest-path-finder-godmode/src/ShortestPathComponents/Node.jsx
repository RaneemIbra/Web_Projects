import React, { Component } from "react";
import "./Node.css";

export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
    } = this.props;

    const nodeClassName = `node ${isFinish ? "node-finish" : ""} ${
      isStart ? "node-start" : ""
    } ${isWall ? "node-wall" : ""}`;

    return (
      <div
        id={`node-${row}-${col}`}
        className={nodeClassName}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      ></div>
    );
  }
}
