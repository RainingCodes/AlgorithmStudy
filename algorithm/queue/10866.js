const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();
input = input.map((item) => item.trim());

/*
push_front X: 정수 X를 덱의 앞에 넣는다.
push_back X: 정수 X를 덱의 뒤에 넣는다.
pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 덱에 들어있는 정수의 개수를 출력한다.
empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/

let arr = [];
let result = [];
for(i of input){
    let [N, M] = i.split(' ');

    if(N == 'push_back'){
        arr.push(M);
    }
    if(N == 'push_front'){
        arr.unshift(M);
    }
    if(N == 'pop_front'){
        if(arr.length == 0){
            result.push(-1);
        }else{
            result.push(arr.shift());
        }
    }
    if(N == 'pop_back'){
        if(arr.length == 0){
            result.push(-1);
        }else{
            result.push(arr.pop());
        }
    }
    if(N == 'empty'){
        if(arr.length == 0){
            result.push(1);
        }else{
            result.push(0);
        }
    }
    if(N == 'size'){
        result.push(arr.length);
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
}
console.log(result.join('\n'));
