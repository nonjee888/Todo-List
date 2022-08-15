function solution(phone_number) {
    var answer = '';
    return phone_number.slice(0,-4).replace(/[0-9]/g,'*')+phone_number.slice(-4); 
    // slice를 앞에서 부터 -4까지 자르고 별로 치환해서 + 뒤에서부터 네번째를 잘라서 붙인다
}