const fs = require('fs');
const { isContext } = require('vm');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arr = input.map((item) => +item)

solution(arr);

//A * B * C = 0이 몇 번 쓰였는지?
function solution(arr){
    const countNum = Array.from({length: 10}, () => 0);
    let mul = arr[0] * arr[1] * arr[2];
    const str = String(mul);

    for(let i = 0; i < str.length; i++){
        countNum[str[i]]++;
    }

    for(let i = 0; i < countNum.length; i++){
       console.log(countNum[i]);
    }
}