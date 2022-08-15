function solution(x, n) {
    var answer = [];

    for(let i=1; i<=n; i++)   //숫자 갯수인 n이 늘어나는것. i=n으로 본다. 갯수이므로 1부터 시작
    answer.push(x*i)          //첨에 n의 1번째요소라고 함.. 그냥 i번째인데. 1,2,3...n 
    return answer             //return answer 까먹지 말자 undifined라고 뜸.
}