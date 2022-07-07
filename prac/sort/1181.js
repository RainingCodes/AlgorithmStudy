/**********************************************************************
 내장 함수 sort 이용
 ***********************************************************************/
/*const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();

input.sort(); // 문자순서대로 정렬

// 문자열 길이로 정렬
input.sort((a, b) =>{
    if(a.length < b.length) return -1;
})

const result = [];
//같은 문자는 한번만 출력
for(let i = 0; i < N; i++){
    if(input[i] === input[i + 1]) {
        continue;
    }
    result.push(input[i]);
}

console.log(result.join('\n'));*/

/**********************************************************************
 merge sort 이용
 ***********************************************************************/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();

function mergeSort(input){
    if (input.length === 1) return input;

    const mid = Math.ceil(input.length / 2);
    const left = input.slice(0, mid);
    const right = input.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    const sortedArr = [];

    while(left.length && right.length){
        if(left[0] === right[0]){ //같은 문자일 때
            left.shift();
        }else if(left[0].length == right[0].length){ //문자열 길이가 같을 때
            let i = 1;
            let l = left[0].slice(0, i);
            let r = right[0].slice(0, i);

            //문자 순서대로 첫 문자열도 같은 경우
            while(l == r){ //한 자리씩 비교해서 문자가 다를 때까지 
                if(l.charCodeAt(0) == r.charCodeAt(0)){
                    l = left[0].slice(i - 1, i);
                    r = right[0].slice(i - 1, i);
                }
                i++;
            }
            if(l.charCodeAt(0) < r.charCodeAt(0)){
                sortedArr.push(left.shift());
            }else{
                sortedArr.push(right.shift());
            }
        }else{ 
            if(left[0].length < right[0].length){
                sortedArr.push(left.shift());
            }else{
                sortedArr.push(right.shift());
            }
        }
      }
     return [...sortedArr, ...left, ...right];
}

const sorted = mergeSort(input);
console.log(sorted.join('\n'));