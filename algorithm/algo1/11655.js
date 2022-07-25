const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString(); 
//trim()이 있으면 출력 형식이 잘못되었습니다.라고 뜸.
//입력 데이터에 있을 수 있는 공백을 없애므로 trim()은 지워야 한다.
let arr = [...input];
let i = 0;
    while(i < arr.length){
        let rot13 = arr[i].charCodeAt(0) + 13;
        if(arr[i] >= 'A' && arr[i] <= 'Z'){
            if(rot13 > 90){
                arr[i] = String.fromCharCode(rot13 - 26);
            }else{
                arr[i] = String.fromCharCode(rot13);
            }
        }
        if(arr[i] >= 'a' && arr[i] <= 'z'){
            if(rot13 > 122){
                arr[i] = String.fromCharCode(rot13 - 26);
            }else{
                arr[i] = String.fromCharCode(rot13);
            }
        }
        i++;
    }
    console.log(arr.join(''));