const depthMap: Map<string, string[]> = new Map();

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

const depthFirstSearch = (startNode: string): boolean | string => {
  const connections = map.get(startNode);

  for (let connection of connections!) {
    if (sellsMangoes(connection)) {
      return connection;
    }

    return depthFirstSearch(connection);
  }

  return false;
};

const sellsDepthMangoes = (name: string): boolean => {
  return name.includes('i');
};

console.log(depthFirstSearch('Arinze'));
