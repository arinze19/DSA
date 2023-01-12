import { getCheapestCost, Node } from './SalesPath';

test('Determine if sales path is shortest', () => {
  class SalesNode {
    cost: number;
    children: SalesNode[];

    constructor(cost: number, children: Node[]) {
      this.cost = cost;
      this.children = children;
    }
  }

  const node4 = new SalesNode(9, []);
  const node2 = new SalesNode(4, [node4]);
  const node3 = new SalesNode(5, []);
  const node1 = new SalesNode(0, [node2, node3]);
});
