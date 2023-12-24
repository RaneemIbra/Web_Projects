import React, { Component } from "react";
import Node from "./Node";
import { dijkstra, getNodesInShortestPathOrder } from "../Algorithms/Dijkstra";

import "./Grid.css";
import ToolBar from "./ToolBar";

let START_NODE_ROW = 10;
let START_NODE_COL = 15;
let FINISH_NODE_ROW = 10;
let FINISH_NODE_COL = 35;
const ROW = 28;
const COL = 62;

export default class Grid extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
      startIsChecked: false,
      targetIsChecked: false,
    };
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({ grid });
  }

  handleMouseDown(row, col) {
    const { startIsChecked, targetIsChecked, grid } = this.state;
    if (startIsChecked) {
      const newGrid = getNewGridWithStartMoved(grid, row, col);
      this.setState({ grid: newGrid, mouseIsPressed: true });
    } else if (targetIsChecked) {
      const newGrid = getNewGridWithTargetMoved(grid, row, col);
      this.setState({ grid: newGrid, mouseIsPressed: true });
    } else {
      const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
      this.setState({ grid: newGrid, mouseIsPressed: true });
    }
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;

    const { startIsChecked, targetIsChecked, grid } = this.state;

    if (startIsChecked) {
      const newGrid = getNewGridWithStartMoved(grid, row, col);
      this.setState({ grid: newGrid });
    } else if (targetIsChecked) {
      const newGrid = getNewGridWithTargetMoved(grid, row, col);
      this.setState({ grid: newGrid, mouseIsPressed: true });
    } else {
      const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
      this.setState({ grid: newGrid });
    }
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  handleToggleStart = () => {
    this.setState((prevState) => ({
      startIsChecked: !prevState.startIsChecked,
      targetIsChecked: false,
    }));
    console.log("After toggle - startIsChecked:", this.state.startIsChecked);
  };

  handleToggleTarget = () => {
    this.setState((prevState) => ({
      targetIsChecked: !prevState.targetIsChecked,
      startIsChecked: false,
    }));
    console.log("After toggle - targetIsChecked:", this.state.targetIsChecked);
  };

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  handleStartButtonClick = () => {
    this.visualizeDijkstra();
  };

  handleClearGridClick = () => {
    const grid = getInitialGrid();
    this.clearAnimation();
    this.setState({ grid, mouseIsPressed: false });
  };

  clearAnimation = () => {
    const nodes = document.querySelectorAll(".node");
    nodes.forEach((node) => {
      const [row, col] = node.id.split("-").slice(1).map(Number);
      const isStart = row === START_NODE_ROW && col === START_NODE_COL;
      const isFinish = row === FINISH_NODE_ROW && col === FINISH_NODE_COL;

      node.className = isStart
        ? "node node-start"
        : isFinish
        ? "node node-finish"
        : "node";
    });
  };

  render() {
    const { grid, mouseIsPressed, startIsChecked, targetIsChecked } =
      this.state;

    return (
      <>
        <ToolBar
          onStartButtonClick={this.handleStartButtonClick}
          onClearGridClick={this.handleClearGridClick}
          startIsChecked={startIsChecked}
          targetIsChecked={targetIsChecked}
          onToggleStart={this.handleToggleStart}
          onToggleTarget={this.handleToggleTarget}
        />
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < ROW; row++) {
    const currentRow = [];
    for (let col = 0; col < COL; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const getNewGridWithStartMoved = (grid, newRow, newCol) => {
  const newGrid = grid.slice();

  for (let row = 0; row < ROW; row++) {
    for (let col = 0; col < COL; col++) {
      newGrid[row][col].isStart = false;
    }
  }

  const newNode = {
    ...newGrid[newRow][newCol],
    row: newRow,
    col: newCol,
    isStart: true,
  };

  newGrid[newRow][newCol] = newNode;
  START_NODE_COL = newCol;
  START_NODE_ROW = newRow;

  return newGrid;
};

const getNewGridWithTargetMoved = (grid, newRow, newCol) => {
  const newGrid = grid.slice();

  for (let row = 0; row < ROW; row++) {
    for (let col = 0; col < COL; col++) {
      newGrid[row][col].isFinish = false;
    }
  }

  const newNode = {
    ...newGrid[newRow][newCol],
    row: newRow,
    col: newCol,
    isFinish: true,
  };

  newGrid[newRow][newCol] = newNode;
  FINISH_NODE_COL = newCol;
  FINISH_NODE_ROW = newRow;

  return newGrid;
};
