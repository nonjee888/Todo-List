function solution(a, b) {        // (3,5)
    var answer = 0;
    var min = Math.min(a,b)      //min값을 찾아줘   3
    var max = Math.max(a,b)      //max값을 찾아줘   5
     
    for(let i=min; i<=max; i++){   //i가 min이면 i가 max만큼 반복되게 해줘    3,4,5
        answer += i;               //답은 모든 i를 더한 값       3+4+5 = 12
    }
    
    return answer;
}