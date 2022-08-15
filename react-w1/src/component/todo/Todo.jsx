import React from "react";
import './style.css'

function Todo ({todo, onDeleteHandler, onCompleteHandler}) {
    
    return (
    <div className="todos-container">
      <h2 className="todo-title">
        {todo.title}
      </h2>
      <p>{todo.body}</p>
      <div className="todo-button-set">
        <button onclick={() => onDeleteHandler(todo.id)} className="todo-delete-botton botton">삭제하기</button>
        <button onclick={() => onCompleteHandler(todo.id)}className="todo-complete-botton botton">완료</button>
      </div>
    </div>
  );
    }

    export default Todo;