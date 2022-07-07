/*const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

function merge(left, right) {
    const sortedArr = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    //left,right 둘 중 하나는 요소가 남아있기 때문에 sortedArr 뒤에 붙여서 출력
    return [...sortedArr, ...left, ...right];
  }
  
  function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const mid = Math.ceil(arr.length / 2);
    //slice로 해주기 때문에 원본 arr은 손상 없다.
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
      //요소가 1개 일 때까지 재귀를 실행해 요소가 1개일 때 두 left,right부터
        //차근차근 merge(정렬해서 합치기)해주면 된다.
    return merge(mergeSort(left), mergeSort(right));
  }
  
  //const arr = [7, 4, 3, 2, 1, 6, 5];
  const sortedArray = mergeSort(input);
  //console.log(arr); //[7, 4, 3, 2, 1, 6, 5]
  console.log(sortedArray.join('\n')); //[1, 2, 3, 4,5, 6, 7]