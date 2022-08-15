function solution(price, money, count) {
    var answer = 0;        // 없어도됨
    var totalPrice = 0;
    
    for(let i=1; i<=count; i++) //count이 length이면 안됨. count와 같거나 작아야함
        totalPrice += price*i   //totalPrice 나와주어야 올바른 계산 가능.
        return money > totalPrice ? 0 : totalPrice - money
}