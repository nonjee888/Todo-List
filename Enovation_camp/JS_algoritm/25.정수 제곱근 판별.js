function solution(n) {
    var answer = 0;
    var x = Math.sqrt(n)  // 제곱근을 구하는 함수. x 가 나옴 
    
    if( n % x == 0 ) {
        answer = Math.pow((x+1), 2);
    } else {
        return -1
    }
    return answer;
}





function solution(n) {
    let answer = 0;
    let x = Math.sqrt(n) // x = 11
        
    if (Number.isInteger(x) == false){  // 정수판별 함수로 11이 소수인지 정수인지 판별
        answer = -1                      // 소수면 -1 
        } else {
        answer = Math.pow((x+1), 2)     // 아니면 11에 1 더한값을 제곱해라
        }
        
    return answer;
}