/*const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

input = input.map((item) => +item);

quickSort(input, 0, input.length);

function quickSort(input, left, right){
    if(left < right){
        let q = partition(input, left, right);
       // console.log('q: ' + q + ' left: ' + left + "," + right);
        quickSort(input, left, q);
        quickSort(input, q + 1, right);
    }
}

function partition(input, left, right){
   let pivot = input[left];
   let low = left;
   let high = right;
   let tmp;

   //console.log('pivot:' + pivot);
   while(low < high){

    do{
        low++;
       // console.log('pivot:' + pivot + "," + input[low]);
    }while(low < input.length  && pivot > input[low]);
    do{
        high--;
      //  console.log('sspivot:' + pivot + "," + input[high]);
    }while(high < input.length && pivot < input[high]);

    if(low < high){
        tmp = input[low];
        input[low] = input[high];
        input[high] = tmp;
    }

   }

   tmp = input[high];
   input[high] = input[left];
   input[left] = tmp;
   //console.log(input);

   return high;
}
console.log(input.join('\n'));