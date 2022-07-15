const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ');

let arr = [];
let i = 1;
while(i <= N){
   arr.push(i++);
  }

let cnt = 1;
let result = [];
while(arr.length){
    let item = arr.shift();
    if(cnt % K == 0){
        result.push(item);
    }else{
        arr.push(item);
    }
    cnt++;
}
console.log(`<${result.join(', ')}>`);