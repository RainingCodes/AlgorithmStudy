const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let printStar = '';
for(let i = 1; i <= +input[0]; i++){
    for(let j = 1; j <= i; j++){
        printStar += '*';
    }
    printStar +='\n';
}
console.log(printStar);