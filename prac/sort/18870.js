const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();

input = input.shift().split(' ').map((item) => +item);
let origin = input;

// 정렬 전 배열 저장
let sorted = input.concat().sort((a, b) => {
    return a - b;
})

solution();
/*********************************************************
 좌표 압축 
 arr = [2, 4, -10, 4, -9];
 sorted = [-10, -9, 2, 4, 4];
 map(key(배열 원소), value(정렬된 배열 기준 idx));
 map =>   {-10:0, -9:1, 2:2, 4:3, 4:3};

 원래 배열 순서대로 map의 value 값 출력 map.get(origin 배열 원소 값);

 *********************************************************/
function solution(){
    const map = new Map();
    let k = 0;

    for(let i of sorted){
        if(map.has(i)){ 
            map.set(i, map.get(i));
        }else{
            map.set(i, k);
            k++;
        }
    }
    
    let result = '';
    for(let i of origin){
        result += map.get(i) + ' ';
    }
    console.log(result);
}