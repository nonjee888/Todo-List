function solution(n)
{
    let answer = 0; 
    n = n.toString();
    console.log(n) //숫자를 문자로 변환 해 주기
    
    for (let i=0; i<n.length; i++){ // 왜 n의 길이보다 작게? 문자로 봐서?
        answer += parseInt(n[i])    // 답이 더해질때 n[i]를 숫자로 변환해서 더해줌
    }
    
    return answer;
}