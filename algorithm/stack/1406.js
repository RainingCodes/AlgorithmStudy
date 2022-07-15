const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

//https://gobae.tistory.com/23 참고 스택 사용

let s = input.shift().trim();
let N = input.shift();

input = input.map((item) => item.trim());

/*
스택 사용 문제
cursor를 기준으로 왼쪽 스택, 오른쪽 스택을 생성
왼쪽 스택은 커서 앞에 있는 단어들, 오른쪽 스택은 커서 뒤에 있는 단어들이다.

L ->  커서를 왼쪽으로 이동. 커서 앞에 있는 단어가 커서 뒤로 와야 한다.
      커서를 기준으로 앞에 있는 단어(왼쪽 스택에 있는)를 pop 하고 커서 뒤로 (오른쪽 스택으로) push
      === 오른쪽 스택.push(왼쪽 스택에서 pop())

D -> 커서를 오른쪽으로 이동. 커서 뒤에 있는 단어가 앞으로 이동해야 한다.
     커서를 기준으로 뒤에 있는 단어(오른쪽 스택에 있는)를 pop 하고 커서 앞으로 (왼쪽 스택으로) push
     === 왼쪽 스택.push(오른쪽 스택에서 pop())

B -> 왼쪽 스택에서 pop()
P x-> 왼쪽 스택에 단어 x를 push
*/

solution(input, s);
function solution(input, s){

    let lStack = [...s];
    let rStack = [];
  
    for(let i of input){

        let NM = i.split(' ');
        let N = NM.shift();

        if(i.length > 1){
            M = NM.shift();
        }

        //L	커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
        if(N == 'L'){
            if(lStack.length > 0){
                 rStack.push(lStack.pop());
            }
        }
        //D	커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
        if(N == 'D'){
            if(rStack.length > 0){
                lStack.push(rStack.pop());
           }
        }
        //B	커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
        //  삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
        if(N == 'B'){
            lStack.pop();
        }
        //P $	$라는 문자를 커서 왼쪽에 추가함
        if(N == 'P'){
            lStack.push(M);
        }
    }
    let answer = lStack.join('') + rStack.reverse().join('');
    console.log(answer);
}