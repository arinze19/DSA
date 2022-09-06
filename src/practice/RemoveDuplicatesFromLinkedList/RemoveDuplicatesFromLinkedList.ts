class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number, next: LinkedList | null) {
    this.value = value;
    this.next = next;
  }
}


export const removeDuplicates = (list: LinkedList) => {
  const cache = [];
  let pointer = list;
  let pointer2 = pointer.next;
  //   add head into cache array;
  cache.push(pointer.value);

  do {
    if (pointer.next && pointer2 && cache.indexOf(pointer.next.value) !== -1) {
      do {
        pointer2 = pointer2.next;
      } while (pointer2 && cache.indexOf(pointer2.value) !== -1);
    }

    pointer.next = pointer2;

    if (pointer2) {
      pointer = pointer2;
      pointer2 = pointer.next;
      cache.push(pointer.value);
    }
  } while (pointer2);

  return list;
};
