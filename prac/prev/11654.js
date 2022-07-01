const fs = require('fs');
const { isContext } = require('vm');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

console.log(input.charCodeAt(0));