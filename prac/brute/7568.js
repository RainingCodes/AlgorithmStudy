
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map((item) => item);

solution(input);

function solution(input){
    let N = +input[0];
    let arr = input.slice(1, input.length);
    const person = {};

    //person 객체 생성
    for(let i = 0; i < N; i++){
        let info = arr[i].split(' ');
        person[i] = {'weight' : +info[0], 'height' : +(info[1].trim())}; 
    }
   
    let result = [];
    //등수 계산
    for(let i = 0; i < N; i++){
        let k = 1;
        for(let j = 0; j < N; j++){
            if(i != j){
                if(person[i].weight < person[j].weight){
                    if(person[i].height < person[j].height){
                        k++; //자신보다 몸무게와 키가 크다면
                    }
                }
            }
        }
        person[i].rank = k; //값 추가
        result.push(person[i].rank);
    }
    console.log(result.join(' '));
}
