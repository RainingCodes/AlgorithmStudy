const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let result = [];
let stack = [];

//연산자의 우선순위를 정하는 함수
function operator(op){
    switch(op){
        case '(': case ')': return 0;
        case '+': case '-': return 1;
        case '*': case '/': return 2;
    }
}

let i = 0;

while(i < input.length){
    let ch = input[i].charCodeAt(0);
    if(ch >= 65 && ch <= 90){ // A ~ Z 문자일때
        result.push(input[i]);
    }else{
        //왼쪽 괄호는 무조건 삽입. - 제일 우선순위가 낮음.
        if(input[i] == '(' || stack.length == 0){
            stack.push(input[i]);
        }else{
            if(input[i] == ')'){ //오른쪽 괄호를 만나면 왼쪽 괄호가 삭제 될 때까지 pop()
                let item = stack.pop();
                while(item != '('){
                    result.push(item); //괄호 안의 연산자들 출력
                    item = stack.pop();
                }
            }else{
                let iop = operator(input[i]); //현재 처리 중인 연산자의 순위
                let sop = operator(stack[stack.length - 1]); //스택 마지막 연산자의 순위

                 /* stack의 마지막 연산자의 우선순위가 현재 처리중인 연산자보다 높으면
                  (괄호는 예외 - 왼쪽 괄호 만나면 무조건 삽입.)
                */
                if(sop >= iop){
                     /*
                         우선순위가 높거나 같은 연산자들을 먼저 출력 후,
                         현재 처리 중인 연산자를 스택에 넣어야 함.
                     */
                    while(sop >= iop){
                        result.push(stack.pop());
                        sop = operator(stack[stack.length - 1]);
                     }
                }
                stack.push(input[i]);
            }
        }
    }
    i++;
}
result.push(...stack.reverse());
console.log(result.join(''));