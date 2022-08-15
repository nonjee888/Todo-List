function solution(arr) {
    var answer = 0;
    
    for(let i=0; i<arr.length; i++)   
    answer += arr[i] / arr.length;    // 여기서 의문 모든 arr[i]값을 더한 것을 length로 나누어야하는데 왜 우선순위의 법칙에 따라서 나눗셈이 먼저 되지 않을까?
    return answer;
}