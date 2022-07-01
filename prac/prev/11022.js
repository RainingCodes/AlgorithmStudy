const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testcaseArray = [];

for(let i = 1; i <= +input[0]; i++){
    const testVal = input[i].split(' ').map((item) => + item);
    testcaseArray.push({A: testVal[0], B: testVal[1]});
}
solution(+input[0], testcaseArray);

function solution(T, testcaseArray){
    let answer = '';
    for(let i = 0; i < T; i++){
        console.log(`Case #${i+1}: ${testcaseArray[i].A} + ${testcaseArray[i].B} = ${testcaseArray[i].A + testcaseArray[i].B}`);
    }
}