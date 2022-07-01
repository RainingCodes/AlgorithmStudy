const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'prac/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = +input[0];

for(let i = 1; i <= 9; i++){
    //console.log(input + ' * ' + i + " = " + (input*i));
    console.log(`${input} * ${i} = ${input * i}`);
}
