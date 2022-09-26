const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

input = input.map((item) => +item);

let A = input.shift();
let B = input.shift();
let C = input.shift();

//(A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C
let result = [];
result.push(`${(A + B) % C}`);
result.push(`${((A % C) + (B % C)) % C}`);
result.push(`${(A * B) % C}`);
result.push(`${((A % C) * (B % C)) % C}`);

console.log(result.join(' '));