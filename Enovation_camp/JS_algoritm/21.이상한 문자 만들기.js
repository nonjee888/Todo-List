function solution(s) {
    let answer = [];
// 먼저 s의 값을 공백을 기준으로 쪼갠다
let result  = s.split(" ")

// 그리고 i가 0부터 result의 길이만큼 돌게 되는데
// 이 때 sum이라는 변수를 새로 만들어 문자열을 넣어준다
for ( let i = 0; i < result.length; i++) {
    let sum = '';
    // 다시한번 이중 for문을 이용하여 j가 result[i]의 길이만큼 돌게 되는데
    // 여기서 만약 j가 짝수라면 sum에 result[i][j]를 대문자로 붙여준다.
    // 만약 j가 홀수라면 sum에 result[i][j]를 소문자로 붙여준다.
    for(let j = 0; j < result[i].length; j++) {
        if (j % 2 === 0) {
            sum += result[i][j].toUpperCase()
        } else {
            sum += result[i][j].toLowerCase()
        }
    }
    // 다음 단계로는 answer에 sum을 push
    answer.push(sum)
}
// 마지막으로 분리된 배열을 공백을 기준으로 하나의 문자열로 합쳐서 return
return answer.join(' ')
}