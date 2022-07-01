const readLine = require('readLine');
const rl = readLine.createInterFace({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on('line', function (line){
    input.push(line);
}).on('close', function() {

    let x = +input[0];
    let y = +input[1];

console(x, y);
    if(x > 0 && y > 0){
        ans = 1;
    }
    if(x < 0 && y > 0){
        ans = 2;
    }
    if(x < 0 && y < 0){
        ans = 3;
    }
    if(x > 0 && y < 0){
        ans = 4;
    }
    console.log(ans);
    process.exit();

});
