const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map((item) => +item);

solution(input)

    function solution(input) {
        const arr = [];
        // 인덱스 번호가 주어진 숫자 n과 대응하도록 
            // 빈 배열을 만들고 원소는 true 값으로 채워준다.
          // 여기서 true 는 소수라는 의미이다.
            // 배열은 0부터 시작하므로, 주어진 숫자 n에 1을 더해준다.
        for (let i = 0; i < 10001; i += 1) {
            arr.push(true);
        }
        
        // 주어진 수의 제곱근까지만 계산해서 불필요한 반복을 최소화한다.
        // arr[i] 가 소수일 경우, 반복문을 진행한다.
        // 맨 처음 시작하는 2는 소수이므로,
        // 2를 제외한 2의 제곱부터, 제곱 값만 체크하여 지워나간다.
          // 제곱근까지 반복한다.
        for (let i = 2; i * i <= 10000; i += 1) {
            if (arr[i]) {
                for (let j = i * i; j <= 10000; j += i) {
                    arr[j] = false;
                }
            }
        }
        
          // 0과 1은 소수가 아니므로 false 값으로 바꿔준다.
        arr.splice(0, 2, false, false);

        let a = -1, b = -1;
        for(let i = 1; i <= input[0]; i++){
             for(let j = 0; j < arr.length; j++){
                if(arr[j]){
                    let isPrime = input[i] - j;
                    if(arr[isPrime]){
                        if(a > -1){
                            if((b - a) > (j - isPrime)){
                                b = isPrime;
                                a = j;
                            }
                        }else{
                            a = j; 
                            b = isPrime;
                        }
                    }
                }
             }
             console.log(a + " " + b);
             a = -1, b = -1;
        }
    }
