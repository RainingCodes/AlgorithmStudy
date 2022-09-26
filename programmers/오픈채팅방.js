let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];

solution(record);

function solution(record) {
    var answer = [];
    const map = new Map();
    let info;
    
    for(let i = 0; i < record.length; i++){
        info = record[i].split(' ');
        if(info[0] === 'Enter' || info[0] === 'Change'){
           map.set(info[1], info[2]);
        }
    }
    for(let i = 0; i < record.length; i++){
        info = record[i].split(' ');
        switch(info[0]){
            case 'Enter':
                answer.push(`${map.get(info[1])}님이 들어왔습니다.`);
                break;
            case 'Leave':
                answer.push(map.get(info[1]) + "님이 나갔습니다.");
                break;
        }
    }

    console.log(answer);
    return answer;
}

