function solution(num) {
    var answer = 0;
    
    while ( num != 1 ) {         // 입력된 값이 1이 아닌동안 반복한다
        if( num % 2 == 0) {      // 입력된 값이 2로 나누어 떨어 질 경우, 
            num /= 2;            // 입력된 값을 2로 나누고
        } else {                 // 홀수일 경우
            num = ( 3 * num ) + 1  // 값에 3을 곱해서 1을 더해라 
        }answer += 1               // 반복하면 답은 1이 된다 
    }   if( answer >= 500 ) {      // 만약 답이 500 이상 반복시
        return -1                   // -1 을 반환하고 
    }   else {
        return answer;             // 아니면 답 1을 반환하라
    }  
}


function solution(num) {
    var answer = 0; // 반복횟수 0으로 설정. 
    while(num !=1 && answer !=500){ // 숫자가 1이 아니고 동시에 횟수가 500이 아니라면
        num%2==0 ? num = num/2 : num = num*3 +1; // 짝수라면 2로 나누고 아니면 곱하기 3에 1더하기.
    answer++; // answer에 1을 더해라. 
  }
    return num == 1 ? answer : -1; // 숫자가 1이면 answer를 그렇지않으면(500이면) -1을 반환. 
}