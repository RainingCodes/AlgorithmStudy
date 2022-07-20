const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim();

//정규식 사용
const regexp = /(<.+?>|\s)/g; // => . (모든 문자열) +? (1회 이상 연속) /s(공백) /g(모든 문자 검색)

let s = input.split(regexp);

let result = [];
s.map((str) => {
    if(regexp.test(str)){ // 정규식 패턴과 일치하는 문자는 그대로 result에 추가
        result += str;
    }else{
        let a = str.split("").reverse().join(""); //문자열을 뒤집어서 result에 추가
        result += a; //
    }
});

console.log(result);