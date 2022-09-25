const map: Map<string, string[]> = new Map();

map.set('Arinze', ['Sarah', 'James']);
map.set('Sarah', ['Charlie', 'Jamie', 'Brent']);
map.set('James', ['Marcus']);
// cut these out
map.set('Charlie', ['Jerry']);
map.set('Jamie', ['Larry', 'Ellie']);
map.set('Marcus', []);
map.set('Brent', []);
map.set('Jerry', []);
map.set('Larry', []);
map.set('Ellie', []);

const breadthFirstSearch = (startNode: string) => {
  const queue = [startNode];
  const cache: string[] = [];

  while (queue.length > 0) {
    const friend = queue.shift()!;
    const connections = map.get(friend);

    if (cache.indexOf(friend) === -1) {
      cache.push(friend);
      for (let connection of connections!) {
        if (sellsMangoes(connection)) {
          return connection;
        }

        queue.push(connection);
      }
    }
  }

  return null;
};



const sellsMangoes = (name: string): boolean => {
  return name.includes('i');
};

console.log(depthFirstSearch('Arinze'));
