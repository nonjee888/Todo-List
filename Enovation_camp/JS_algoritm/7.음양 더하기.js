function solution(absolutes, signs) {
    var answer = 0;
    
    for(let i=0; i<absolutes.length; i++){  // 배열의 길이만큼 반복해서 더해줘야 하니까
        if(signs[i] == true){               // true 참 거짓 할 때 true? 아니면 그냥 요소로서의 true 일까?
            answer = answer + absolutes[i]  // 여기서 조금 헷갈림. 식으로 어떻게 표현해야 하는지 감이 안잡힘. answer = answer 에 +absolutes[i] 를 더하고
        }   else {                          // 홀수면 answer = answer -absolutes[  i]를 더한다.
            answer = answer - absolutes[i]
        }
    }return answer;
}