const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim();

input = [...input];
let arr = [];

while(input.length > 0){
    arr.push(input.join(''));
    input.shift();
}
console.log(arr.sort().join('\n'));