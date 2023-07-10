class LinkedNode {
  data: [number, number];
  prev: null | LinkedNode;
  next: null | LinkedNode;

  constructor(key: number, value: number) {
    this.data = [key, value];
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  head: null | LinkedNode;
  tail: null | LinkedNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(node: LinkedNode) {
    // case 1: it could be the first item in the list
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      // case 2: not the first item
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  update(node: LinkedNode, key: number, value: number) {
    let updatedkey = -1;
    // case 1: has only head and tail simultaneously
    if (
      this.head &&
      this.head.next === null &&
      this.tail &&
      this.tail.prev === null &&
      node.prev === null &&
      node.next === null
    ) {
      this.head.data = [key, value];

      updatedkey = this.head.data[1];
    }
    // case 2: if it is the tail
    else if (node.next === null && node.prev !== null) {
      const currenttail = node.prev;

      currenttail.next = null; // detatch the tail from the linked list

      this.tail = currenttail; // reassign this.tail

      if (this.head !== null) {
        this.head.prev = node;
      }

      node.next = this.head;
      node.prev = null;

      this.head = node; // reassign this.head

      updatedkey = this.head.data[1];
    }

    // case 3: if it is the middle
    else if (node.prev !== null && node.next !== null) {
      // detatch the node and reassign its next and prev to point to one another
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.prev = null;
      node.next = this.head;
      this.head = node; // reassign this.head

      updatedkey = this.head.data[1];
    }
    // case 4: it its the head and there are other node
    else {
      node.data = [key, value];

      updatedkey = key;
    }

    return updatedkey;
  }

  pop() {
    // case 1: tail is also the head
    if (
      this.head &&
      this.head.next === null &&
      this.tail &&
      this.tail.prev === null
    ) {
      const formerhead = this.head;
      this.head = null;
      this.tail = null;

      return formerhead.data[0];
    } else if (this.tail && this.tail.prev !== null) {
      this.tail.prev.next = null;

      const formertail = this.tail;

      this.tail = formertail.prev;

      formertail.prev = null;
      formertail.next = null;

      return formertail.data[0];
    }

    // case 2: tail is not the head
    return -1;
  }

  peek() {
    let head = this.head;
    const result: number[][] = [];

    while (head !== null) {
      result.push([head.data[0], head.data[1]]);
      head = head.next;
    }

    return result;
  }
}

class LRUCache {
  private capacity: number;
  private size: number;
  private map: Record<number, LinkedNode>;
  private linkedlist: DoubleLinkedList;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.map = {};
    this.linkedlist = new DoubleLinkedList();
  }

  get(key: number): number {
    // if item not in the cache, return -1
    if (this.map[key] === undefined) return -1;
    // if item in map, return item
    return this.linkedlist.update(
      this.map[key],
      this.map[key]['data'][0],
      this.map[key]['data'][1]
    );
  }

  put(key: number, value: number): void {
    const exists = this.map[key];
    // if the item exists we want to update it's value and shift to the front
    if (exists) {
      // logic
      this.linkedlist.update(exists, key, value);
    }
    // if the item does not exist and we have reached the capacity of our cache, remove tail node and append as head node
    else if (this.size >= this.capacity) {
      // pop out the last index and delete it from the map
      const lastKey = this.linkedlist.pop();
      delete this.map[lastKey];

      const node = new LinkedNode(key, value);
      this.linkedlist.prepend(node);
      this.map[key] = node;
    } else {
      // if the item does not exist
      const node = new LinkedNode(key, value);
      this.linkedlist.prepend(node);
      this.map[key] = node;
      this.size += 1;
    }
  }

  peek() {
    return this.linkedlist.peek();
  }
}

const cache = new LRUCache(2);
cache.put(2, 2);
cache.put(2, 3);
cache.put(4, 4);
cache.put(4, 8);

// cache.put(5, 5);
// cache.put(5, 3);
// cache.put(4, 9); // update value not working when there is already
console.log(cache.peek());
