function solution(n){
    n = n.toString().split("").reverse()
    //console.log(n) 
    let sum = 0;
    sum = n.reduce((acc, cur) => acc + Number(cur), 0);
    //console.log(sum)
    let answer = `${n.join("+")}=${sum}`
    return answer
  }
  console.log(solution(718253))