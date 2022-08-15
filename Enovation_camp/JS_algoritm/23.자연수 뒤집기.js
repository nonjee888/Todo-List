function solution(n) {
    var answer = [];
    n = n.toString().split('').reverse(); // n을 숫자로,스플릿해서,뒤집어줌
    console.log(n)
    
    for(let i=0; i<n.length; i++){ // 입력값에 따라 달라져야하므로 반복문 
            answer.push(parseInt(n[i])) //답에 parseInt 한 n[i] 값을 넣어줌
            
    }console.log(answer)
    return answer;
}


function solution(n) {
    var answer = [];
    var n = String(n); 
  
    for ( let i=n.length-1; i>=0; i--) {
      answer.push(Number(n[i]))
    }
    
    return answer
  }