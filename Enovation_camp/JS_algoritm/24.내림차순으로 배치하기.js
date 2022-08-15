function solution(n) {
    var answer = 0;
    n = n.toString().split('').sort(function(a, b) {
        return b - a;    
    }).join().replace(/,/g,"");
    console.log(n) //숫자를 문자열로 변환 후 쪼개기까지 확인
    answer = parseInt(n)
    return answer;
}

function solution(n) {   //문자화 스플릿 오름차순 리버스 조인
    var answer = 0;
    n = n + "";
    console.log(typeof n)  
    return Number(n.split('').sort().reverse().join(''))}
   

function solution(n) {
    var answer = 0;
    n = n.toString().split('').sort((a, b) => b - a).join().replace(/,/g,"");
    answer = parseInt(n)
    return answer;
    console.log(n)
}

function solution(n) {
    // 문자풀이
    return parseInt((n+"").split("").sort().reverse().join(""));
}