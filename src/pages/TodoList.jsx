import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

function TodoList () {
    
    const [todos, setTodos] = useState([      //todos 의 state를 갱신하면 새 갱신값인 setTodos를 받아 컴포넌트 리렝더링을 큐에 등록.
    {
      id: 1,                                  //초기 defualt 값 setting 해 주어 첫 화면에 출력 될 수 있도록 한다.
      title: "react를 배워봅시다.",
      body: "함수형 컴포넌트는?",
      isDone: false
    },
    {
      id: 2,
      title: "react를 배워봅시다.",
      body: "클래스형 컴포넌트는?",
      isDone: true
    
    }
  ]);
        
    return (
        //Form 과 List 자녀 컴포넌트에 todos, setTodos를 보내준다고 Layout에 전달
        <Layout >
            <Header />
            <Form todos={todos} setTodos={setTodos}/>          
            <List todos={todos} setTodos={setTodos}/>
        </Layout>

    );
    
    
   
    
   

}
export default TodoList;