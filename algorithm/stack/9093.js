const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();
/* https://code.plus/course/41 */
input.forEach(function(element){
    let a = element.split(' ');
    let result = '';
    for(let i of a){
        let j = 0;
        let arr = [];
        while(j < i.length){
            //문자열 trim 조심하기!
            arr.push(i[i.length - 1 - j].trim());
            result += arr.pop();
            j++;
        }
        result += ' ';
    }
    console.log(result);
})
