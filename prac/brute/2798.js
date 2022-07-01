const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let num = input[0].split(' ').map((item) => +item);
let cards = input[1].split(' ').map((item) => +item);

//정렬
cards.sort(function(a, b)  {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
  });

  //뽑은 3장의 카드 수를 더했을 때 M과 가장 가까운 값을 구한다.
  let sum = function(picked){
       let result = 0;
       let max = -1;
        for(i of [...picked]){    
            result = i[0] + i[1] + i[2];
            if(result <= num[1]){
                if(max < result){
                    max = result;
                }
            }
        }
        return max;
  }

  let picked = combination(cards, 3);

  console.log(sum(picked)); //M과 가장 가까운 값 출력

  function combination(arr, num){
    const res = [];

    if(num === 1) {
        return arr.map((v) => [v]);
    }

    /************************************************************************** *
        전개 연산자
        전개 연산자는 배열의 요소나 객체를 나열해주는 연산자이다.
        배열이나 객체의 복사본(원본에 영향을 미치지 않는)을 만들 수 있으며,
        여러개의 배열이나 객체를 손쉽게 병합할 수도 있다.
        또한, 함수의 매개변수나 인자 값으로도 사용이 가능한 연산자이다.
        사용법은 객체나 배열을 담은 변수 앞에 '...'을 붙이면 된다.
     /************************************************************************** *
  

    /************************************************************************** *
        array.forEach(callbackFunction(currnetValue, index, array), thisArg);
 
        매개변수로는 callbackFunction 과 thisArg 가 있다.
        array의 인자값 만큼 callbackFunction이 반복되고,  thisArg 는 거기서의 this 값.
 
        currentValue : 배열 내 현재 값.
        index : 배열 내 현재 값의 인덱스.
        array : 현재 배열.
     ************************************************************************** */
    arr.forEach((v, idx, arr) => {
    // 조합에서는 값 순서에 상관없이 중복이 되면 안되기 때문에 현재값 이후의 배열들만 추출한다.
      const rest = arr.slice(idx+1);

       // 나머지 배열을 기준으로 다시 조합을 실시한다.
        // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
      const combinations = combination(rest, num-1);

      // 기준값(fixed)에 돌아온 조합(combinations)을 붙인다.
      const attach = combinations.map((combination) => [v, ...combination]);
      res.push(...attach);
    });
    return res;
  }