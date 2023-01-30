export interface Node {
  cost: number;
  children: Node[];
}

export function getCheapestCost(
  rootNode: Node,
  initialMinCost = Number.MAX_SAFE_INTEGER
) {
  if (!rootNode.children) return rootNode.cost;

  for (let i = 0; i < rootNode.children.length; i++) {
    const minCost =
      rootNode.cost + getCheapestCost(rootNode.children[i], initialMinCost);
    initialMinCost = minCost < initialMinCost ? minCost : initialMinCost;
  }

  return initialMinCost;
}
