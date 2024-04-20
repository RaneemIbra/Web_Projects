import { NodeComponent } from '../node/node.component';

export function dijkstra(
  grid: NodeComponent[][],
  entryNode: NodeComponent,
  targetNode: NodeComponent
) {
  const visitedNodesInOrder: NodeComponent[] = [];
  const unvisitedNodes = getAllNodes(grid);

  entryNode.distance = 0; // Initialize distance for the start node

  while (unvisitedNodes.length > 0) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift() as NodeComponent;

    if (closestNode.wall) continue;

    if (closestNode.distance === Infinity) {
      console.log('Reached Infinity, returning...');
      return visitedNodesInOrder;
    }

    closestNode.isVisited = true;
    visitedNodesInOrder.push(closestNode);

    if (closestNode === targetNode) {
      console.log('Reached target, returning...');
      return visitedNodesInOrder;
    }

    updateUnvisitedNeighbors(closestNode, grid);
  }

  console.log('No target found, returning...');
  return visitedNodesInOrder;
}

function sortNodesByDistance(unvisitedNodes: NodeComponent[]): void {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(
  node: NodeComponent,
  grid: NodeComponent[][]
): void {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);

  for (const neighbor of unvisitedNeighbors) {
    const newDistance = node.distance + 1;

    if (newDistance < neighbor.distance) {
      neighbor.distance = newDistance;
      neighbor.previousNode = node;
    }
  }
}

function getUnvisitedNeighbors(
  node: NodeComponent,
  grid: NodeComponent[][]
): NodeComponent[] {
  const neighbors: NodeComponent[] = [];
  const { row, col } = node;

  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

  return neighbors.filter((neighbor) => !neighbor.isVisited);
}

function getAllNodes(grid: NodeComponent[][]): NodeComponent[] {
  const nodes: NodeComponent[] = [];
  for (const row of grid) {
    for (const node of row) {
      node.distance = node.entry === true ? 0 : Infinity;
      nodes.push(node);
    }
  }
  return nodes;
}

export function getNodesInShortestPathOrder(
  finishNode: NodeComponent | null
): NodeComponent[] {
  const nodesInShortestPathOrder: NodeComponent[] = [];
  let currentNode: NodeComponent | null = finishNode;

  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode || null;
  }

  return nodesInShortestPathOrder;
}
