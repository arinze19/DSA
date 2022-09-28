class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const node1 = new BST(12);
node1.left = new BST(8);
node1.right = new BST(15);

node1.left.left = new BST(-1)
node1.left.right = new BST(9)

const closestValueInBst = (tree: BST, target: number): number => {
  return closestValueInBstHelper(tree, target);
};

const closestValueInBstHelper = (
  tree: BST,
  target: number,
  currentClosest = tree.value
): number => {
  if (!tree.value) return currentClosest;

  if(tree.left && !tree.right) {
    currentClosest = currentClosest > tree.left.value ? tree.left.value : currentClosest
    tree = tree.left;
    return closestValueInBstHelper(tree, target, currentClosest)
  }

  if(tree.right && !tree.left) {
    currentClosest = currentClosest > tree.right.value ? tree.right.value : currentClosest
    tree = tree.right; 
    return closestValueInBstHelper(tree, target, currentClosest)
  }

  if (tree.left && tree.right) {
    const lowestDiff = Math.min(Math.abs(target - tree.left.value), Math.abs(target - tree.right.value));
    const closestNodeValue = lowestDiff === Math.abs(target - tree.left.value) ? tree.left.value : tree.right.value;
    currentClosest = Math.abs(target - currentClosest)  > lowestDiff ? closestNodeValue : currentClosest;
    tree = lowestDiff === (target - tree.left.value) ? tree.left : tree.right;
    return closestValueInBstHelper(tree, target, currentClosest)
  }

  return currentClosest;
};

console.log(closestValueInBst(node1, -2));
