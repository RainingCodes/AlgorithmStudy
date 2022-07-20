const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim();

/*
이번 문제는 쇠막대기 갯수가 얼마씩 언제 늘어나는지 확인하는게 중요 포인트입니다.

레이저가 쏘아지는 경우에는, 해당 stack의 길이만큼의 쇠막대기가 생기게 됩니다. 
(주의 : 레이저가 있는 ( 는 카운트하면 안됨)
그래서 stack에서 앞의 ( 값을 제거해주고, stack에 남아있는 갯수만큼 쇠막대기가 생기므로 
stack.length만큼 answer에 추가해줍니다.
만약 stack의 앞의 값이 ) 였다면, 한개의 쇠막대기만 새로 생기게 되는 것이므로, ) 
와 짝이되는 값만큼 삭제가 되어야하므로, stack에서 값을 하나 빼주고, answer에 값을 하나 올려줍니다.
*/
let arr = [];
let answer = 0;
for(let i in input){
    if(input[i] == '('){
        arr.push(i);
    }else{
        if(input[i - 1] == '('){
            arr.pop();
            answer += arr.length;
        }else{
            arr.pop();
            answer++;
        }
    }
}
console.log(answer);

