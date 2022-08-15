import React from "react";
import './style.css';

function Layout(props) {      
    //부모컴퍼넌트인 TodoList에서 받은 props대로 todos와 setTodos 자녀컴퍼넌트인 List와 Form에 전달
    return (
        <div className="layout">
            <layout>
                {props.children}       
            </layout>
        </div>
    )

}

export default Layout;