const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const val = input[0];
solution(val);
function solution(val){
    let str = "";

    if(Number(val) < 10){
        str = "0" + val;
    }else{
        str = val;
    }
   let make = str;
   
   let sum = 0;
   let cnt = 1;
   while(cnt > 0){
      sum = Number(make[0]) + Number(make[1]);

      if(sum >= 10){
        sum = sum % 10;
      }

      make = make[1] + String(sum);
      if(str == make) break;
      cnt++;
   }
   console.log(cnt);
}