const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input[0];
/*
7
3 2 1 2 3 4 5
*/
const arr = input[1].split(" ").map(e => Number(e));

//배열 원소들이 나온 횟수 구함.
let map = new Map();

arr.forEach((element) => {
    if(map.get(element)){
        map.set(element, map.get(element) + 1);
    }else{
        map.set(element, 1);
    }
})

//console.log(map);

let result = Array.from({length:N}, () => -1);
let stack = [0]; //stack에는 arr의 인덱스를 추가
for(let i = 1; i < N; i++) {
    /*
     반대로 순회 중인 원소가 크다면, 그 수는 이때까지 stack에 쌓여있는 인덱스에 해당하는 수들의 오큰수라는 뜻이다.
      따라서 자신을 오큰수로 갖지 않는 즉, 자신보다 큰 수에 해당하는 인덱스까지 stack을 pop하고, 
      마지막으로 자신의 인덱스를 stack에 추가한다.
    */

    while(map.get(arr[stack[stack.length - 1]]) < map.get(arr[i]) && stack.length) {
         result[stack.pop()] = arr[i];
    }
    stack.push(i);
}
console.log(result.join(' '));