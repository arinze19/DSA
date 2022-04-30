// linear data structure whise node includes two information = [item in list, reference to it's next item]
// single linked list - node stores reference to it's successor
// doubly linked list - node stores reference to both it's predecessor and successor

export class node<T> {
  next: node<T> | null = null;

  constructor(public data: T) {
    this.next;
  }
}

export class linkedList<T> {
  constructor(public head: node<T> | null = null) {}
  isEmpty = () => this.head === null;
  size = () => {
    let counter = 0;
    let pointer = this.head;

    while (pointer) {
      pointer = pointer.next;
      counter += 1;
    }

    return counter;
  };
  search = (data: node<T>) => {
    let position = 1;
    let pointer = this.head;

    while (pointer) {
      if (pointer.data !== data.data) {
        pointer = pointer.next;
        position += 1;
      } else {
        return { position: position, searchQuery: pointer };
      }
    }

    return null;
  };
  append = (data: node<T>) => {
    let pointer = this.head;

    if (!pointer) {
      pointer = data;
    } else {
      while (pointer && pointer.next) {
        pointer = pointer.next;
      }

      pointer.next = data;
    }
  };
  prepend = (data: node<T>) => {
    let pointer = this.head;

    if (!pointer) {
      pointer = data;
    } else {
      data.next = this.head;
      this.head = data;
    }
  };
  insert = (data: node<T>, index: number) => {
    if (index > this.size() || index <= 1 || index === this.size()) return null;

    let preceedingNode = this.head!;
    const preceedingIndex = index - 1;

    for (let i = 1; i !== preceedingIndex; i++) {
      preceedingNode = preceedingNode.next!;
    }

    data.next = preceedingNode.next;
    preceedingNode.next = data;
  };
  visualize = () => {
    let pointer = this.head;
    let result = '';

    while (pointer) {
      result += `[${pointer.data}] ->`;
      pointer = pointer.next;
    }

    result += `${null}`;

    return result;
  };
}

const nodeOne = new node<number>(10);
const list = new linkedList(nodeOne);
list.prepend(new node<number>(15));
list.append(new node<number>(30));