const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

/*
10 5 -> N, X
1 10 4 9 2 3 8 5 7 6
*/
const testNum = input[0].split(' ').map((item) => +item);
const testcaseArray = input[1].split(' ').map((item) => +item);

solution(testNum[1], testcaseArray);

function solution(T, testcaseArray){
    let result = '';
    for(let i = 0; i < testcaseArray.length; i++){
        if(testcaseArray[i] < T){
            result += testcaseArray[i] + ' ';
        }
    }
    console.log(result);
}