const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const map = new Map();
let arr = [...input];

//97 ~ 122
for(let i = 0; i < 26; i++){
    map.set(String.fromCharCode(97 + i), 0);
}

arr.forEach(element => {
    if(map.get(element)){
        map.set(element, map.get(element) + 1)
    }else{
        map.set(element, 1);
    }
})

let result = [];
for(let i of map.values()){
    result.push(i);
}
console.log(result.join(' '));