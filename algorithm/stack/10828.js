const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();

let arr = [];
let result = '';

for(let i of input){
    let NM = i.split(' ');
    let N = NM.shift();
    let M = 0;

    if(N.includes('push')){
        M = +(NM.shift().trim());
        push(arr, M);
    }
    if(N.includes('top')){
        peek(arr);
    }
    if(N.includes('size')){
        printSize(arr);
    }
    if(N.includes('empty')){
        result += is_empty() + '\n';
    }
    if(N.includes('pop')){
        pop(arr);
    }
}

//empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
function is_empty(){
    if(arr.length == 0){
        return 1;
    }else return 0;
}

//pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
function pop(arr){
        if(is_empty(arr) == 1){
            result += '-1' + '\n';
        }else{
            let del = arr.pop();
            result += del + '\n';
        }
}

//push X: 정수 X를 스택에 넣는 연산이다.
function push(arr, x){
    arr.push(x);
}

//size: 스택에 들어있는 정수의 개수를 출력한다.
function printSize(arr){
    result += arr.length + '\n';
}

//top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
function peek(arr){
    if(is_empty(arr) == 1){
        result += '-1' + '\n';
    }else{
        result += arr[arr.length - 1] + '\n';
    }
}

console.log(result);