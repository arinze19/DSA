export class node<T> {
  next: node<T> | null = null;

  constructor(public data: T) {
    this.next;
  }
}

class LinkedList {
  value: number;
  next: null | number;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }

//   size = () => {
//     let counter = 0;
//     let pointer = this.head;

//     while (pointer) {
//       pointer = pointer.next;
//       counter += 1;
//     }

//     return counter;
//   };
}

const removeDuplicatesFromLinkedList = () => {};
