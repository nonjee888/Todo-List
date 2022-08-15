let b = 1;
let a = 2;

function hi () {

const a = 1;

let b = 100;

b++;

console.log(a,b);          // function hi 실행시 1, 101로 찍힘. 

}

console.log(a);            // 앞에 주석이 달려있으면 콘솔 안찍힘. a 값도 없어서 위에 let a = 2; 

console.log(b);            // 맨 위에 b = 1; 이 찍힘

hi();                      
 
console.log(b);            // 맨 위에 b = 1; 이 찍힘