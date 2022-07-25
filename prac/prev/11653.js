/*const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString();*/

const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sorted = input.sort((a, b) => a - b);

for(let i = 0; i < sorted.length; i++){
    console.log(sorted[i]);
}
