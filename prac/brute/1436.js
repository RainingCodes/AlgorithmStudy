const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString();
input = +input;

solution(input);

function solution(input){
  let num = 666;
  let count = 1;

    while (count !== input) {
        num++;
        if (String(num).includes("666")) count++; //증가된 숫자 안에 666이 포함되면 count++;
    }
    
    console.log(num);
}