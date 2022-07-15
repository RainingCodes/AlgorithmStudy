const { Console } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();
input = input.map((item) => item.trim());

solution(input);

/*
 왼쪽 괄호를 만나면 스택에 push, 오른쪽 괄호를 만나면 스택 pop
 1. pop을 하기 전 이미 스택이 비워져 있다면 NO 
 2. 반복문을 다 돌고 난 후 스택에 남아있는 원소가 있다면 NO
*/
function solution(input){

    let result = '';
    for(let i of input){
        let j = 0;
        let stackArr = [];
        let flag = false;
        while(j < i.length){
            if(i[j] == '('){
                stackArr.push(i[j]);
            }else{
                if(stackArr.length == 0){
                    flag = true;
                    result += 'NO' + '\n';
                    break;
                }else{
                    stackArr.pop();
                }
            }
            j++;
        }
        if(flag == false){
            if(stackArr.length > 0){
                result += 'NO' + '\n';
            }
            if(stackArr.length == 0){
                result += 'YES' + '\n';
            }
        }
    }
    console.log(result);
}