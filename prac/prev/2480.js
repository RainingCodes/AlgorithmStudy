const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'prac/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

let a = input[0];
let b = input[1];
let c = input[2];
let money;

if(a != b && a != c && b != c){
let max = a;
    if(a < b){
        if(b < c){ max = c;}
        else{max = b};
    }else {
        if(a > c){max = a;}
        else{max = c;}
    }
    money = max * 100;
}

if(a === b){
    if(a === c){
        money = 10000 + (a * 1000);
    }else{
        money = 1000 + (a * 100);
    }
}else if(a != b){
    if(a === c || b === c){
        money = 1000 + (c * 100);
    }
}
console.log(money);