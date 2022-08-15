function solution(month, day){
    let date = new Date(2022, month-1, day + 98);
    let getMonth = date.getMonth()+1;
    let getDay = date.getDate();
      return getMonth + "월" + getDay + "일";
  }
  console.log(solution(1,18))