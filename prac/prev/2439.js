const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input[0];
let printStar = '';
    for(let j = 1; j <= N; j++){
        for(let h = N - 1; h >= j ; h--){
           printStar += ' ';
        }
        for(let i = 1; i <= j; i++){
            printStar += '*';
        }
        printStar += '\n';
    }
console.log(printStar);