import React from "react";
import './style.css';
import Todo from '../todo/Todo';

function List({todos, setTodos, onChange1, onChange2}) {
    
    return (
        <div className="list-container">
        <h2>Working.. 🔥</h2>
        <div className="list-wrapper">
            {todos.map((todo) => {
                if(todo.isDone === false) {
                    return <Todo todo={todo} key={todo.id} setTodos={setTodos} onChange1={onChange1} onChange2={onChange2} />
                }
              }
            )}
        </div>       
        <h2>Done..! 🎉</h2>
        <div className="list-wrapper">
            {todos.map((todo) => {
                if(todo.isDone === true) {
                    return <Todo todo={todo} key={todo.id} setTodos={setTodos} onChange1={onChange1} onChange2={onChange2} />
                }
              }
            )}      
      </div>
    </div>
    );   
    }
export default List;