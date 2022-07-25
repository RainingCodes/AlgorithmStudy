const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const { resourceLimits } = require('worker_threads');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
//문자, 대문자, 숫자, 공백의 개수
let result = [];

for(let element of input) {
    if(element === ''){ // input이 공백으로 들어오면 처리하지 않아야 함.
        continue;
    }else{
         let i = 0;
         let arr = Array.from({length: 4}, () => 0);
            while(i < element.length){
            if('A' <= element[i] && element[i] <= 'Z'){
                    arr[1] = +(arr[1]) + 1;
            }else if('a' <= element[i] && element[i] <= 'z'){
                arr[0] = +(arr[0]) + 1;
            }else if(!isNaN(parseFloat(element[i]))){
                    arr[2] = +(arr[2]) + 1;
            }else if(element[i] == ' '){
                    arr[3] = +(arr[3]) + 1;
            }
        i++;
        }
        result += arr.join(' ').trim() + '\n';
    }
}

console.log(result.trim());