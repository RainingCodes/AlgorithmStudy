const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

const map = new Map();
let i = 0;
input.forEach(function(element){
    let name = element.split(' ')[1].trim();
    map.set(name, i);
    i++;
})

//input.sort((a, b));
/*
if(a > b) return 1; 
return value > 0 이므로 a는 b 뒤에 옵니다.
 
if(a < b) return -1;
return value < 0 이므로 a는 b 앞에 옵니다.
*/

input.sort((a, b) => {
    let N = a.split(' ');
    let M = b.split(' ');

    //나이가 적은 순
    if(+N[0] < +M[0]){
        return -1;
    }else return 1;

    //나이가 같다면 가입한 순서대로 
    //trim 중요 공백이 있으면 같지 않다로 판별. Dohyun/r != Dohyun 
    if(N[0] == M[0]){
        if(map.get(N[1].trim()) < map.get(M[1].trim())){
            return -1;
        }else { return 1; }
    }
})
console.log(input.join('\n'));