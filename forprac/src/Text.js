import React from "react";

const Text = (props) => {
const text = React.useRef(null);

const hoverEvent= () => {
    text.current.style.background = "yellow";     //text.current.style은 e.target과 같음
}
React.useEffect(() => {
    text.current.addEventListener("mouseover", hoverEvent);        //text.current에 mouseover 동작을 하는 어떤함수를 addEventListener로 달아줄거야?

    return () => {
        text.current.removeEventListener("mouseover", hoverEvent);   //return에 text.current.removeEventListener를 같은 방식으로 달아줌
    }
}, []);
return (
<h1 ref={text}>텍스트입니다!</h1>
)
}

export default Text;