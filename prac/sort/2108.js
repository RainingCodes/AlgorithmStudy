const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

/*
5
-4000
-4000
0
1
1

output)
-1600
0
1
4001
*/
let N = input.shift();
input = input.map((item) => +item);

solution(input, N);
function solution(input, N){

    //산술평균
    let avg = Math.round(input.reduce((acc, num) => (acc += num), 0) / N);
    if(avg == -0){
        console.log(0);
    }else console.log(avg);

    //중앙값
    input = input.sort((a, b) => a - b);
    console.log(input[Math.floor(N / 2)]);

    //최빈값
    const map = new Map();
    let max = 1;
    for (let number of input) {
        if (map.has(number)) {
            max = Math.max(max, map.get(number) + 1);
            map.set(number, map.get(number) + 1);
        } else map.set(number, 1);
    }

    const maxArr = [];
    for (let [key, val] of map) {
    if (val === max) maxArr.push(key);
    }
    if(maxArr.length == 1){
        console.log(maxArr[0]);
    }else{
        console.log(maxArr[1]);
    }
  /*  let maxNum = {};

    //값이 하나일 경우
    if(input.length == 1){
        console.log(input[0]);
    }else{
      
    for(let i = 0; i < N; i++){
        maxNum[input[i]] = 0;
    }
   
    let oKeys = Object.keys(maxNum);
   
    //나온 수만큼 값 증가 maxNum = { '수': 나온 횟수,  }
    for(let i = 0; i < N; i++){
         maxNum[`${input[i]}`]++;
    }

    let oValues = Object.values(maxNum);
    //최빈값이 모두 같을 때 
    if(oValues.every( (val, i, arr) => val === arr[0] )){
        console.log(input[1]);
    }else{
       let max = Math.max(...oValues); //가장 많이 나온 횟수
       let maxArrs = []; //최빈값이 같은 수가 여러 개일 경우 key를 담을 배열
       //최빈값이 같다면 
       oValues.forEach(function(element, idx){
        if(max == element){
            maxArrs.push(Number(oKeys[idx]));
        }
       })

       if(maxArrs.length == 1){
            console.log(maxArrs[0]);
       }else{
                maxArrs.sort(function(a, b)  {
                    return a - b;
                  });
                console.log(maxArrs);
             //최빈 값이 같은 여러 수들 중 두 번째로 작은 값.
             console.log(maxArrs[1]); 
       }
    }
}*/

    //범위
    console.log(input[N - 1] - input[0]);
}