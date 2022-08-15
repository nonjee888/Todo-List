function solution(a, b) {
    var answer = '';
    var month = [31,29,31,30,31,30,31,31,30,31,30,31];    //각 월별 날짜수
    var day = ["THU","FRI","SAT","SUN","MON","TUE","WED"]; //목요일이 0 금요일이 1일
    var sum_days =0;                              // 0이어야 됨
    
    for(let i=0; i<a-1; i++){      //월을 반복문으로 돌려
        sum_days += month[i]       //월별날짜수 더해
        }
        sum_days += b               // 거기다   b더해
        answer = day[sum_days % 7]  // 답은 섬데이즈를 7로나눈 나머지 번째 데이
       return answer;
}