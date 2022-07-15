const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();
input = input.map((item) => item.trim());

//console.log(input);

/*
push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/

let arr = [];
let result = [];
for(i of input){
    let NM = i.split(' ');
    let N = NM.shift();
    let M = NM.shift();
    if(N == 'push'){
        arr.push(M);
    }
    if(N == 'pop'){
        if(arr.length == 0){
            result.push(-1);
        }else{
            result.push(arr.shift());
        }
    }
    if(N == 'front'){
        if(arr.length == 0){
            result.push(-1);
        }else{ 
            result.push(arr[0]);
        }
    }
    if(N == 'back'){
        if(arr.length == 0){
             result.push(-1);
        }else{
             result.push(arr[arr.length - 1]);
        }
    }
    if(N == 'size'){
      //  if(arr.length > 0){
        result.push(arr.length);
    //    }
    }
    if(N == 'empty'){
        if(arr.length == 0){
            result.push(1);
        }else{
           result.push(0);
        }
    }
}
console.log(result.join('\n'));