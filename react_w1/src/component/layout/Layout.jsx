import React, {useState} from 'react';
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import Todo from "../todo/Todo";
import './style.css';

function Layout({addTodos, onChange1, onChange2}) {
 
    const [todos, setTodos] = useState([

    ]); 
    
return (
    <div className="layout">
           
                <Header />
                <Form addTodos={addTodos} onChange1={onChange1} onChange2={onChange2}/>
                <List todos={todos} setTodos={setTodos}/>
                <Todo />
            
        </div>
    );
}

export default Layout;