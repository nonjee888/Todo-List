function solution(arr1, arr2) {      // 이중 for문 헷갈렸던 문제
    var answer = [];                 // 초기 세팅이 [[]] 이어서 []로 바꿔줌
    
    for(let i=0; i<arr1.length; i++){ //행렬 arr1의 i번째 요소와 j번째 요소가 반복적으로 나와야 해서 이중 for문이 될 것임.
        var sum = [];                 //sum 을 []로 지정해줘서 요소 i,j를 한번씩 묶어줌
        for(let j=0; j<arr1[i].length; j++){   // j요소를 위한 for문. 왜 arr[i] 의 길이보다 작아야 할까? 
            sum.push(arr1[i][j]+arr2[i][j])  //push로 두 행렬의 덧셈을 sum에 넣어줌
        }   answer.push(sum)                 //answer [] 에 마지막으로 넣어줌
    }
    
    return answer;                            // 이중 for문이 왜 필요한지 직접 손으로 써보고 알게됨.
}