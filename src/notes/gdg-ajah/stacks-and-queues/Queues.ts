class QueueNode<T> {
  data: T;
  next: QueueNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinearQueue<T> {
  private head: QueueNode<T> | null;
  private tail: QueueNode<T> | null;
  // private count: number; 

  constructor(data: T) {
    this.head = new QueueNode(data);
    this.tail = null; // this should actually be pointing to the head node?
  }

  enqueue(data: T) {
    const val = new QueueNode<T>(data);
    if (this.head === null) {
      this.head = val;
    } else if (this.tail === null && this.head !== null) {
      this.head.next = val;
      this.tail = val;
    } else if (this.tail !== null) {
      this.tail.next = val;
      this.tail = val;
    }
  }
  dequeue() {
    const head = this.head;
    this.head = head !== null ? head.next : null;

    if (this.head !== null && this.tail !== null) {
      if (this.head.next === this.tail.next) {
        this.tail = null;
      }
    }

    return head ? head.data : null;
  }
  empty() {
    return this.head === null;
  }
  front() {
    return this.head ? this.head.data : null;
  }
  back() {
    return this.tail ? this.tail.data : null;
  }
}

// ======================= array implementation
class CircularQueue {
  private head: number;
  private tail: number;
  private list: (number | null)[] = [];
  constructor(k: number) {
    this.head = -1;
    this.tail = -1;
    this.list = new Array(k).fill(null);
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;

    if (this.isEmpty()) {
      this.head = 0;
    }

    this.tail = (this.tail + 1) % this.list.length;
    this.list[this.tail] = value;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;

    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;

      return true;
    }

    if (this.head === this.tail) {
      this.tail = (this.tail + 1) % this.list.length;
    }

    this.head = (this.head + 1) % this.list.length;
    return true;
  }

  Front(): number {
    if (this.isEmpty()) return -1;

    return this.list[this.head]!;
  }

  Rear(): number {
    if (this.isEmpty()) return -1;

    return this.list[this.tail]!;
  }

  isEmpty(): boolean {
    // queue is empty when this.head is null
    return this.head === -1;
  }

  isFull(): boolean {
    // queue is full when tail + 1 >= this.head
    return (this.tail + 1) % this.list.length === this.head;
  }
}
