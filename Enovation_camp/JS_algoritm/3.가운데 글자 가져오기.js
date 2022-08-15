function solution(s) {
    var answer = '';
    
    for (let i=0; i<s.length; i++) {             // i = 0; i가 s의 길이보다 짧음
        if(s.length % 2 == 0) {                  // 만약 s의 길이가 짝수라면
            answer = s[s.length/2-1]+s[s.length/2]  // 정답은 s[i] + s[i]
        }   else {                                  // 아니면
            answer = s[Math.floor(s.length/2)]      //s[Math.floor(s.length/2)] 
        }
    }
    
    return answer;
}
