function solution(x) {
    var answer= true;                 // answer 를 true 로 놓고
    var str = x.toString();       // xString 를 x를 문자로 변환한 변수로 선언
    var result= 0;                    
    
    for(let i=0; i<str.length; i++){  // 입력된 숫자들을 돌리면서 더해줘야해서 반복문
        result += Number(str[i])      // result에 숫자로 변환한 xString을 다더함
    } if( x % result == 0 ) {           // 만약 입력값 x 가 result로 나누어지면 
        return answer                   // 정답인 트루를 리턴하고
    }   else {                          // 아니면
        return false                    // false 를 리턴해라
    }     
}