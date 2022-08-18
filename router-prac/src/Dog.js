import React from "react";
import { useHistory } from "react-router-dom";

const Dog = (props) => {
    const history = useHistory();
    console.log(props);
    return (
        <div onClick={() => {
            history.push("/cat") //props의 history로 이동해서 push(=페이지 이동)
        }}>강아지 화면이에요.</div>
    )
}

export default Dog;