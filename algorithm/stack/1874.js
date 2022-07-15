const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();

input = input.map((item) => +item);

solution(input)

/*1 ~ N까지 input과 같을 때까지 스택에 push ( + 출력)를 한다.
 input과 스택의 맨 위 원소가 같다면 pop (- 출력)
 
 반복문을 다 돌고나서도 스택이 비어있지 않다면 수열을 만들지 못한 것이므로, NO 출력

 */
function solution(input){

    let arr = [];
    let j = 1;
    let result  = [];

    for(let i of input){
        while(j <= N && arr[arr.length - 1] != i){
            arr.push(j++);
            result.push('+');
        }
        if(arr[arr.length - 1] == i){
            arr.pop();
            result.push('-');
        }
    }
    if(arr.length > 0){
        console.log('NO');
    }else{
        console.log(result.join('\n'));
    }

}