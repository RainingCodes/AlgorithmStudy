// 지시사항을 참고하여 solution 함수 안에 코드를 작성하고 출력값을 return 하세요.
let game = '두부 5모\n두부 4모';

solution(5, 3, game);
function solution(all, start, game) {
    let stack = [];
    let i;
    for (i = 0; i < all; i++) {
      stack.push('두부 ' + (i + 1) + '모');
    }
    while (stack[start - 1] != '두부 3모') {
      stack.push(stack.shift());
    }

    game = game.split('\n');
    for (let j = 0; j < game.length; j++) {
        let idx = stack.indexOf(game[j]);
      while(stack[idx] != '두부 3모') {
        stack.push(stack.shift());
      }
    }
    console.log(stack.indexOf('두부 3모') + 1);
    //return String(stack.indexOf('두부 3모'));
  }
  