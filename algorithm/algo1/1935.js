const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();
let len = input.shift().trim();

input = input.map((item) => +(item.trim()));
let i;

//console.log('A'.charCodeAt(0)); char -> ascii
//console.log(String.fromCharCode(65)); ascii -> char
let arr = [];
i = 0;
while(i < len.length){
    let ch = +(len[i].charCodeAt(0));
    if(65 <= ch && ch <= 90){ // 문자가 A ~ Z 일때
        arr.push(input[ch - 65]);
    }else{ // +, -, *, / 일 때
        arr.push(len[i]);
    }
    i++;
}

let stack = [];
i = 0;
while(i < arr.length){
    if(Number(arr[i])){ //숫자일때
        stack.push(arr[i]);
    }else{

        let op2 = stack.pop();
        let op1 = stack.pop();
        let answer = 0;

        switch(arr[i]){
            case '+': answer = op1 + op2; break;
            case '-': answer = op1 - op2; break;
            case '*': answer = op1 * op2; break;
            case '/': answer = op1 / op2; break;
        }
        stack.push(answer);
    }
    i++;
}

console.log(stack[0].toFixed(2));




