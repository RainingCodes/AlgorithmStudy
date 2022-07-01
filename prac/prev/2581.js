const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let M = +input[0];
let N = +input[1];

solution(M, N)

function solution(M, N) {
    let cnt = 0;
    let sum = 0;
    let min = 10000;

    for(let i = M; i <= N; i++){
        cnt = 0;
        for(let j = 1; j <= i; j++){
            if(i % j == 0){
                cnt++;
            }
        }
        if(cnt == 2){
            if(min > i){
                min = i;
            }
            sum += i;
        }
    }
    if(sum == 0){
        console.log('-1');
    }else{
        console.log(sum + '\n' + min);
    }
}