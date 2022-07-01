const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString();
input = +input;

let first = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.";
let sentence = "\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어."
+"\n마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지."
+"\n그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\"";

let last = "라고 답변하였지.";
let ask = "\"재귀함수가 뭔가요?\"";
let answer = "\"재귀함수는 자기 자신을 호출하는 함수라네\"";
let a = "";

console.log(first);
solution(input, a);

function solution(n){
    if(n == 0){
        console.log(a + ask);
        console.log(a + answer);
        console.log(a + last);
    }else{
        //이전에 추가된 _ 없애고 바뀐 a와 새로 결합하기 위해
        // 이 문장이 없으면 기존에 a + sentence된 문자열에서 다시 정의한 a가 계속 합쳐진다. (중복된다.)
        sentence = sentence.replaceAll('_', '');
        sentence = a + sentence.replaceAll('\n', '\n' + a);
        console.log(a + ask);
        console.log(sentence);
        a += '____'; //순환될 때마다 ____ 4개씩 붙인다.
    
        solution(n - 1);

        if(a.length == 4){
            a = '';
        }else{
         a = a.slice(0, a.length - 4); //____ 4개씩 자르기
        }
        console.log(a + last);
    }
}
