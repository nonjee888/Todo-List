
function solution(arr) {
    var answer = [];
    
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    console.log(arr)
    
    return arr.length ? arr : [-1];  // arr 길이가 있냐, 없냐 ? true : false
   
}


// function solution(arr) {                // [4,3,2,1]
//    if(arr.length > 1){                 // index가 2개 이상일 때
//        var minNum = Math.min(arr)      // 1
//       var idx = arr.indexOf(minNum)   //-1
//        arr.splice(idx, 1)              // arr.splice(-1, 1)
//    }   else {                          // 또는 -1을 리턴해라
//        return [-1];
//    }    
//    return arr;                         //arr을 보여죠
//}