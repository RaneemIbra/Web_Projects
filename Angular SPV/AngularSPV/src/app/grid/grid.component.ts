import { Component, Input, Renderer2 } from '@angular/core';
import { NodeComponent } from '../node/node.component';
import { dijkstra } from '../Algorithms/Dijkstra';
import { getNodesInShortestPathOrder } from '../Algorithms/Dijkstra';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  constructor(private renderer: Renderer2) {}

  initialGrid: NodeComponent[][] = [];
  private isDrawing = false;
  @Input() entryNodeRow: number = 15;
  @Input() entryNodeCol: number = 15;
  @Input() targetNodeRow: number = 20;
  @Input() targetNodeCol: number = 20;

  ngOnInit() {
    this.initialGrid = this.initializeGrid(this.initialGrid);
  }

  private initializeGrid(grid: NodeComponent[][]): NodeComponent[][] {
    for (let row = 0; row < 55; row++) {
      const currentRow: NodeComponent[] = [];
      for (let col = 0; col < 29; col++) {
        let node = this.createNode(row, col);
        node.distance = Infinity;

        if (row === this.entryNodeRow && col === this.entryNodeCol) {
          node.distance = 0;
        }
        currentRow.push(node);
      }
      grid.push(currentRow);
    }
    return grid;
  }

  createNode(row: number, col: number): NodeComponent {
    let node = new NodeComponent();
    node.row = row;
    node.col = col;
    node.entry = row === this.entryNodeRow && col === this.entryNodeCol;
    node.target = row === this.targetNodeRow && col === this.targetNodeCol;
    node.distance = Infinity;
    node.isVisited = false;
    node.wall = false;
    return node;
  }

  clearGrid() {
    let newGrid: NodeComponent[][] = [];
    this.initialGrid = this.initializeGrid(newGrid);
  }

  startVisualization() {
    this.visualizeDijkstra();
  }

  updateGrid(row: number, col: number) {
    if (this.isDrawing) {
      if (
        !this.initialGrid[row][col].entry &&
        !this.initialGrid[row][col].target
      ) {
        this.initialGrid[row][col].wall = !this.initialGrid[row][col].wall;
      }
    }
  }

  changeColor(row: number, col: number) {
    if (
      !this.initialGrid[row][col].entry &&
      !this.initialGrid[row][col].target
    ) {
      this.initialGrid[row][col].wall = !this.initialGrid[row][col].wall;
    }
  }

  onMouseDown() {
    this.isDrawing = true;
  }

  onMouseUp() {
    this.isDrawing = false;
  }

  animateDijkstra(
    visitedNodesInOrder: NodeComponent[],
    nodesInShortestPathOrder: NodeComponent[]
  ): void {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        const element = document.getElementById(`node-${node.row}-${node.col}`);
        if (element) {
          this.renderer.addClass(element, 'node-visited');
        }
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder: NodeComponent[]): void {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        const element = document.getElementById(`node-${node.row}-${node.col}`);
        if (element) {
          this.renderer.addClass(element, 'node-shortest-path');
        }
      }, 50 * i);
    }
  }

  visualizeDijkstra(): void {
    const startNode = this.initialGrid[this.entryNodeRow][this.entryNodeCol];
    const finishNode = this.initialGrid[this.targetNodeRow][this.targetNodeCol];
    const visitedNodesInOrder = dijkstra(
      this.initialGrid,
      startNode,
      finishNode
    );
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }
}
