import React from "react";
import './style.css';

function Layout(props) {      
    //부모컴퍼넌트인 TodoList에서 받은 props대로 todos와 setTodos 자녀컴퍼넌트인 List와 Form에 전달
    return (                                   // 레이아웃사이의 컴포넌트들이 보여지게 하기위해 props.children 사용함
        <div className="layout">
                {props.children}         
        </div>
    )

}

export default Layout;