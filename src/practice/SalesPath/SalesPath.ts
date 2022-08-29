/**
 * The car manufacturer Honda holds their distribution system in the form of a tree (not necessarily binary).
 * The root is the company itself, and every node in the tree represents a car distributor that receives cars from the parent node and ships them to its children nodes.
 * The leaf nodes are car dealerships that sell cars direct to consumers.
 * In addition, every node holds an integer that is the cost of shipping a car to it.
 *
 *              0
 *             / \
 *            4   5
 * A path from Honda’s factory to a car dealership, which is a path from the root to a leaf in the tree,
 * is called a Sales Path. The cost of a Sales Path is the sum of the costs for every node in the path.
 * For example, in the tree above one Sales Path is 0→3→0→10, and its cost is 13 (0+3+0+10).
 * Honda wishes to find the minimal Sales Path cost in its distribution tree. Given a node rootNode, write a function getCheapestCost that calculates the minimal Sales Path cost in the tree.
 *
 * Implement your function in the most efficient manner and analyze its time and space complexities.
 *
 * TIME COMPLEXITY: O(n)
 * SPACE COMPLEXITY: O(n)
 */

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
    let minCost =
      rootNode.cost + getCheapestCost(rootNode.children[i], initialMinCost);
    initialMinCost = minCost < initialMinCost ? minCost : initialMinCost;
  }

  return initialMinCost;
}
