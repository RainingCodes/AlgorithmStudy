/*
12 8 80
2 2 2
1 10000 0
7 3 12
8 3 14
3 7 12
100000000 999999999 99999998800000002
5 3 8
*/
console.log(solution(7, 3));
//가로 + 세로 - 최대 공약수
function solution(w, h) {
    var answer = 1;
    let i = 1;
    let result = 1;
    while(i <= Math.min(w, h)){
        if(w % i == 0 && h % i == 0){
            result = i;
        }
        i++;
    }
    answer = w * h - (w + h - result);
    return answer;
}