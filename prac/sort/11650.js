const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();

const arr = [];
//[{x: x좌표, y: y좌표 ..}]
input = input.forEach(function(element){
    let xy = element.split(' ');
    arr.push({x: +xy[0], y: +(xy[1].trim())});
})


function merge(left, right) {
    const sortedArr = [];

    while (left.length && right.length) {
      if (left[0].x < right[0].x) {
        sortedArr.push(left.shift());
      }else if(left[0].x == right[0].x){
        if(left[0].y < right[0].y){ //x좌표 같으면 y가 증가하는 순서
            sortedArr.push(left.shift());
        }else{
            sortedArr.push(right.shift());
        }
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
    return merge(mergeSort(left), mergeSort(right));
  }

  const resultArr = mergeSort(arr);
  //console.log(result);
  let result = '';
  for(let i in resultArr){

    result += resultArr[i].x + ' ' + resultArr[i].y + '\n';
  }
console.log(result);
