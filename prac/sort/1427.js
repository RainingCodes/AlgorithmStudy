const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString();

/* submit)
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim();
*/

let arr = [];
for(let i = 0; i < input.length; i++){
    arr.push(+input[i]);
}
arr = arr.sort((a, b) => b - a);
console.log(arr.join(''));
