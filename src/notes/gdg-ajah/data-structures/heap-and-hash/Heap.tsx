class HeapNode {
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

class MaxHeap {
  private store: HeapNode[];
  getParent: (i: number) => number | null;
  getLeftChild: (i: number) => number | null;
  getRightChild: (i: number) => number | null;

  constructor() {
    this.store = [];
    this.getParent = function (value: number) {
      const idx = this.store.findIndex((node) => node.value === value);
      const floor = Math.floor(idx / 2);

      if (idx < 1) return null;

      // if the value is divisible by two, we can minus one from it and get the parent
      return idx % 2 === 0
        ? this.store[floor - 1].value
        : this.store[floor].value;
    };

    this.getLeftChild = function (value: number) {
      const i = this.store.findIndex((item) => item.value === value);
      const LEFT_CHILD_INDEX = 2 * i + 1;

      if (i === -1 || LEFT_CHILD_INDEX > this.store.length - 1) return null;

      return this.store[LEFT_CHILD_INDEX].value;
    };

    this.getRightChild = function (value: number) {
      const i = this.store.findIndex((item) => item.value === value);
      const RIGHT_CHILD_INDEX = 2 * i + 2;

      if (i === -1 || RIGHT_CHILD_INDEX > this.store.length - 1) return null;

      return this.store[RIGHT_CHILD_INDEX].value;
    };
  }

  // function to view the store
  peek() {
    return this.store.map((item) => item.value);
  }

  insert(value: number) { 
    this.store.push(new HeapNode(value));
    const parent = this.getParent(value);

    if (parent) {
      // if the element added is not the first
      this.heapify(parent);
    }
  }

  heapify(value: number) {
    // edge case when i is less than zero -- element not found;
    const initial = this.store.findIndex((item) => item.value === value); 
    let max = initial; // max is storing the index 
    // get the left and right child of the max node
    const l = this.getLeftChild(value); // this is storing the value 
    const r = this.getRightChild(value); // this is storing the value 

    // if there is a left element and it is greater than the current max, switch it
    if (l !== null && l > this.store[max].value) {
      max = this.store.findIndex((item) => item.value === l);
    }

    if(r !== null && r > max) {
      max = this.store.findIndex(item => item.value === r);
    }

    // if max that entered is not the same with the new max at this point, swap and heapify
    if(max !== initial) {
      // swap parent and child
      const temp = this.store[initial];
      this.store[initial] = this.store[max];
      this.store[max] = temp;

      // this.heapify(this.store[initial].value)
    }

    console.log(this.store.map(item => item.value))
  }

  parent(value: number) {
    this.getParent(value);
  }

  children(item: number) {
    const idx = this.store.findIndex((node) => node.value === item);

    if (idx < 0) return null;

    return [this.getLeftChild(idx), this.getRightChild(idx)];
  }
}

const heap = new MaxHeap();
heap.insert(2); // parent of 3 and 4
heap.insert(3); // parent of 5 and 6
heap.insert(4); // parent of 10 and 11
heap.insert(5);
heap.insert(8);
// heap.insert(10);
// heap.insert(11);

// going from bottom to top
// when an element is added to the heap
// get it's parent
// run the heapify function on it's parent
// do this as long as it has a parent and i has not changed --- base case

// let max = this.getParent(i)
// getLeftChild != null and left > max
// if max != i
// run heapify

// OPERATIONS TO GET RIGHT
// get parent [done]
// get left [done]
// get right [done]
