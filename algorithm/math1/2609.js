const fs = require('fs');
const { resourceLimits } = require('worker_threads');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

input = input.map((item) => +item);
let result = [];
let greatest = 1;
let i = 2;
let cnt = 0;
while(cnt != 2){

    if(input[0] % i == 0 && input[1] % i == 0){
        greatest *= i;
        for(let k = 0; k < 2; k++){
            cnt = 0;
            let N = input[k] / greatest;
            for(let j = 1; j <= N; j++){
                if(N % j == 0){
                    cnt++;
                }
            }
            if(cnt == 2){
                result.push(greatest);
                result.push(greatest * ((input[0] / greatest) * (input[1] / greatest)));
                break;
            }
        }
    }
    i++;
}

console.log(result.join('\n'));