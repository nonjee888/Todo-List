process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let row = '*'.repeat(a)      // 먼저 row를 선언. *을 a만큼 repeat 해줘
    
    for(let i=0; i<b; i++){      // b만큼 찍어줘야하니 b보다 작은 반복문 돌림
        console.log(row)         // 콘솔로그로 로우가 잘 찍히는지 확인
    }
});
