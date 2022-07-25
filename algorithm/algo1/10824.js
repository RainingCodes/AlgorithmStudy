const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim();

input = input.split(' ');

let N = input[0] + input[1];
let M = input[2] + input[3];

console.log(+N + +M);