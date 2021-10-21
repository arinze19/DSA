import { linkedList, node } from '../src/data-structures/LinkedList';

test('performs search, insert, prepend and eppend operations on a linked list', () => {
  const nodeOne = new node<number>(5);
  const list = new linkedList(nodeOne);

  list.append(new node<number>(10));
  list.prepend(new node<number>(15));

  expect(list.size()).toBe(3);
});
