const fs = require('fs');
const { isContext } = require('vm');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(input);
function solution(input){
    const position = Array(26).fill(-1);

    for(let i = 0; i < input.length; i++){
        let p = Number(input[i].charCodeAt(0)) - 97;
        if(position[p] == -1){
            position[p] = i;
        }
    }
    for(let i = 0; i < position.length; i++){
        console.log(position[i]);
    }

    //숫자 -> 문자, 문자 -> 숫자 (아스키코드)
    const a = String.fromCharCode(65);
    console.log(a); // A
    
    const b = "B";
    console.log(b.charCodeAt(0)); // 66
}