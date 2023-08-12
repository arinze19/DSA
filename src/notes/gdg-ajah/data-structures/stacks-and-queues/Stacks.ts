// ======================= array implementation
class Stack<T> {
  private list: T[] = [];
  private count: number;
  constructor() {
    this.list = [];
    this.count = 0;
  }

  push(val: T): boolean {
    this.list.unshift(val);
    this.count++;
    return true;
  }

  pop(): boolean {
    if (this.isEmpty()) return false;
    this.list.shift();
    this.count--;
    return true;
  }

  top(): T {
    return this.list[0];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  size(): number {
    return this.count;
  }
}

// ======================= min stack implementation

class MinStack {
  private list: number[] = [];
  private mins: number[] = [];

  constructor() {
    this.list = [];
    this.mins = [Infinity];
  }

  push(val: number): void {
    if (val <= this.mins[0]) {
      this.mins.unshift(val);
    }
    this.list.unshift(val);
  }

  pop(): void {
    if (this.list[0] <= this.mins[0]) {
      this.mins.shift();
    }
    this.list.shift();
  }

  top(): number {
    return this.list[0];
  }

  getMin(): number {
    return this.mins[0];
  }
}
