const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 올바른 색깔로 칠해진 체스판 입력된 보드판과 색깔 비교하기 위해
const blackFirst = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];
const whiteFirst = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];

//shift()
let NM = input.shift().split(' ');
let N = +(NM.shift());
let M = +(NM.shift());

let min = [];

//board 값 생성
let board = [];
for (let i = 0; i < N; i++) {
  board[i] = input.shift().trim().split('');
} 

// 사각형 길이 8 * 8이므로  배열의 길이 넘어서면 안된다.
for(let i = 0; i <= N - 8; i++){
    for(let j = 0; j <= M - 8; j++){
        solution(board, i, j); //사각형 시작점 
    }
}

console.log(String(Math.min(...min))); // 가장 작은 min 값 구하기

function solution(board, x, y){

  let blackCheck = 0;
  let whiteCheck =0;

  //(board, 0, 5) 라면 가로 5 .. 12까지, 세로 0 .. 7까지 색깔 비교
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(board[i + x][j + y] != blackFirst[i][j]){ blackCheck++; } //BWBWBWBW .. 하나씩 비교
      if(board[i + x][j + y] != whiteFirst[i][j]){ whiteCheck++; } //WBWBWBWB ..
    }
  }

  if(blackCheck < whiteCheck){
    min.push(blackCheck);
  }else{
    min.push(whiteCheck);
  }
}
