const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testcaseArray = [];
for(let i = 0; i < input.length; i++){
    const testcaseVal = input[i].split(' ').map((item) => +item);
    testcaseArray.push({A: testcaseVal[0], B: testcaseVal[1]});
    if(testcaseVal[0] == 0 && testcaseVal[1] == 0) break;
}
/* A + B
1 1
2 3
3 4
9 8
5 2
0 0
*/
solution(testcaseArray);

function solution(testcaseArray){
    for(let i = 0; i < testcaseArray.length; i++){
        if(testcaseArray[i].A != 0 && testcaseArray[i].B != 0){
        let sum = testcaseArray[i].A + testcaseArray[i].B;
        console.log(sum);
        }
    }
}