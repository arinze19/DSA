class Matrix {
  rows: number;
  cols: number;
  list: number[][];

  constructor(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;
    this.list = [];

    for (let i = 0; i < this.rows; i++) {
      this.list.push(new Array(cols).fill(null));
    }
  }

  insert(item: number, row: number, col: number) {
    if (row >= this.rows || col >= this.cols) return -1;
    this.list[row][col] = item;
    return 1;
  }

  display() {
    let string = '';
    for (let i = 0; i < this.list.length; i++) {
      for (let j = 0; j < this.list[i].length; j++) {
        string += `${this.list[i][j]} `;
      }

      string += '\n';
    }

    return string;
  }

  search(item: number) {
    for (let i = 0; i < this.list.length; i++) {
      for (let j = 0; j < this.list[i].length; j++) {
        if (this.list[i][j] === item) {
          return true;
        }
      }
    }

    return false;
  }

  getIndex(item: number) {
    for (let i = 0; i < this.list.length; i++) {
      for (let j = 0; j < this.list[i].length; j++) {
        if (this.list[i][j] === item) {
          return [i, j];
        }
      }
    }

    return [-1, -1];
  }

  reverseRow(rowIndex: number) {
    if (rowIndex >= this.rows) return -1;

    for (let i = 0; i < Math.floor(this.rows / 2); i++) {
      const length = this.cols;
      const last = this.list[rowIndex][length - 1];
      const first = this.list[rowIndex][i];

      this.list[rowIndex][length - 1] = first;
      this.list[rowIndex][i] = last;
    }

    return 1;
  }

  reverseColumn(columnIndex: number) {
    if (columnIndex >= this.cols) return -1;

    for (let i = 0; i < Math.floor(this.cols / 2); i++) {
      const length = this.rows;
      const last = this.list[length - 1][columnIndex];
      const first = this.list[i][columnIndex];

      this.list[length - 1][columnIndex] = first;
      this.list[i][columnIndex] = last;
    }

    return 1;
  }

  diagonalSum() {
    let sum = 0;

    for (let i = 0; i < this.list.length; i++) {
      sum += this.list[i][i];
    }

    return sum;
  }

  sort() {
    const temp: number[] = [];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        temp.push(this.list[i][j]);
      }
    }

    temp.sort((a, b) => a - b);

    let pointer = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.list[i][j] = temp[pointer++];
      }
    }
  }
}

const matrix = new Matrix(2, 2);
matrix.insert(2, 1, 1);
matrix.insert(9, 0, 1);
matrix.insert(19, 1, 0);
matrix.insert(32, 0, 0);
