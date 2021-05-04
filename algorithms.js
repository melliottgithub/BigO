const { chunk } = require('lodash');

const a = [
  [9, 7, 4, 5],
  [1, 6, 2, -6],
  [12, 20, 2, 0],
  [-5, -6, 7, -2],
];

output = [
  [-6, -6, -5, 2],
  [12, 2, 2, 0],
  [9, 20, 6, 1],
  [7, 7, 5, 4],
];

function* borderIndex(i, n) {
  // top
  let row = i;
  col = i;
  while (col < n - i) yield [row, col++];
  // right
  row++;
  col = n - i - 1;
  while (row < n - i) yield [row++, col];
  // bottom
  row = n - i - 1;
  col = n - i - 2;
  while (col >= i) yield [row, col--];
  // left
  row = n - i - 2;
  col = i;
  while (row > i) yield [row--, col];
}

const n = a.length;
var out = a.map((e) => [...e]); // array clone
for (let b = 0; b < a.length / 2; b++) {
  const border = [];
  for (const p of borderIndex(b, n)) {
    border.push(a[p[0]][p[1]]);
  }
  console.log(b, border);
  border.sort((a, b) => a - b);
  let idx = 0;
  for (const p of borderIndex(b, n)) {
    out[p[0]][p[1]] = border[idx++];
  }
}

console.log(out);
