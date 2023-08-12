class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: BSTNode | null;

  constructor(node: number) {
    this.root = new BSTNode(node);
  }

  // traverse

  // insert
  insert(value: number) {
    const newNode = new BSTNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (currentNode !== null) {
      if (value === currentNode.value) return undefined;

      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }

        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }

        currentNode = currentNode.right;
      }
    }
  }

  // lookup
  lookup(value: number) {
    // recurse through each node and return false if none is found
    // stopping condition - if current.node == null
    let currentNode = this.root;

    while (currentNode !== null) {
      if (value === currentNode.value) return true;

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  // remove: study visualgo implementation
}

const BST = new BinarySearchTree(10);
BST.insert(4);
BST.insert(20);
BST.insert(1);
BST.insert(6);
BST.insert(15);
BST.insert(170);