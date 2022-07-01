const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let N = input[0];
input = input[1].split(' ').map((item) => +item);
solution(input);

function solution(A) {
    let cnt = 0;
    let primeCheck = 0;
   
    for(let i = 0; i < A.length; i++){
        cnt = 0;
        if(A[i] != 1 && A[i] != 0){        
            for(let j = 1; j <= A[i]; j++){
                if(A[i] % j == 0){
                   cnt++;
                }
            }
            if(cnt == 2){
                primeCheck++;
            }
        }
    }
    console.log(primeCheck);
}