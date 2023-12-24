import React, { Component, useState } from "react";
import "./ToolBar.css";
import Grid from "./Grid";

export default class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleStartButtonClick = () => {
    this.props.onStartButtonClick();
  };

  handleClearGridClick = () => {
    this.props.onClearGridClick();
  };

  handleToggleStart = () => {
    this.props.onToggleStart();
  };

  handleToggleTarget = () => {
    this.props.onToggleTarget();
  };

  render() {
    const { startIsChecked, targetIsChecked } = this.props;
    return (
      <>
        <div className="toolbar">
          <ul>
            <li>
              <button className="refresh-button" onClick={refreshPage}>
                PathFinding Visualizer
              </button>
            </li>
            <li>
              <select name="Algorithms" id="Algorithms">
                <option value="" disabled>
                  Algorithms
                </option>
                <option>Dijkstra</option>
                <option>BFS</option>
                <option>DFS</option>
              </select>
            </li>
            <li>
              <select name="Patterns" id="Patterns">
                <option value="" disabled>
                  Patterns
                </option>
                <option>Maze1</option>
                <option>Maze2</option>
                <option>Maze3</option>
              </select>
            </li>
            <li>
              <button
                className="list-buttons"
                onClick={this.handleClearGridClick}
              >
                Clear Grid
              </button>
            </li>
            <li>
              <button
                className="list-buttons start"
                onClick={this.handleStartButtonClick}
              >
                Start
              </button>
            </li>
            <li>
              <div className="togglestuff">
                <label className="texts">Place Start Point</label>
                <div className="background_box">
                  <div
                    className="toggle_box"
                    onClick={this.handleToggleStart}
                    style={{
                      backgroundColor: startIsChecked ? "#fff" : "#000",
                    }}
                  >
                    <div
                      className={`circle ${startIsChecked ? "checked" : ""}`}
                      style={{
                        backgroundColor: startIsChecked ? "#000" : "#fff",
                      }}
                    ></div>
                  </div>
                  <input
                    type="checkbox"
                    id="checkbox1"
                    checked={startIsChecked}
                    onChange={this.handleToggleStart}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="togglestuff">
                <label className="texts">Place Target Point</label>
                <div className="background_box">
                  <div
                    className="toggle_box"
                    onClick={this.handleToggleTarget}
                    style={{
                      backgroundColor: targetIsChecked ? "#fff" : "#000",
                    }}
                  >
                    <div
                      className={`circle ${targetIsChecked ? "checked" : ""}`}
                      style={{
                        backgroundColor: targetIsChecked ? "#000" : "#fff",
                      }}
                    ></div>
                  </div>
                  <input
                    type="checkbox"
                    id="checkbox2"
                    checked={targetIsChecked}
                    onChange={this.handleToggleTarget}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

function refreshPage() {
  window.location.reload();
}
