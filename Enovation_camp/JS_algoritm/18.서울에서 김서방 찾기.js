
function solution(seoul) {                                    // index를 반환하는 함수를 완성하라
    for (let i = 0; i < seoul.length; i++) {                  //  i가 seoul의 길이보다 작게 반복시
        if (seoul[i] === 'Kim') return `김서방은 ${i}에 있다`     //  seoul[i] 가 Kim이면 김서방은 ${i}에 있다고출력
    }
}
