function solution(arr1, arr2, signs){
	let answer=[];

    for(let i=0; i<arr1.length; i++){
        let sum1 =0;
        for(let j=0; j<arr1[i].length; i++){
            if(signs[i]==true){
                sum1 = sum1 + arr1[i][j] +arr2[i][j]
            } else {
                sum1 = sum1 - arr1[i][j] -arr2[i][j]
            } 
            }   answer.push(sum1)
        } return answer;
    }

	

let arr1=[[5,7,1],[2,3,5]];
let arr2=[[5,1,6],[7,5,6]];
let signs=[[true,true,false],[false,true,false]];
console.log(solution(arr1, arr2, signs))