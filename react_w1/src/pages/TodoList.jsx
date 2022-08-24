import React, { useState } from "react";
import Form from "../component/form/Form";
import Layout from "../component/layout/Layout";
import Todo from "../component/todo/Todo";


function TodoList() {

        const [title, setTitle] = useState("");
        const [body, setBody] = useState("");
        const [todos, setTodos] = useState([]);

        todo= {id: 0, title: “”, body: “”, isDone: false}


        function onChange1(event) {

                setTitle(event.target.value);
                console.log(setTitle)
                return (
                        <Form onChange1={onChange1} />
                );

        }

        function onChange2(event) {

                setBody(event.target.value);
                console.log(setBody)
                return (
                        <Form onChange2={onChange2} />
                );

        }

        function addTodos() {


                setTodos([...todos, { id: todos.length + 1, title: title, body: body }]);
                console.log()
                return (

                        <Layout addTodos={addTodos} onChange1={onChange1} onChange2={onChange2}>
                                <Form addTodos={addTodos}/>
                        </Layout>

                );

        }

        function onDeleteHandler() {
                onclick={ e =>  onDeleteHandler(todo.id)}
                
                return (
                        
                );
        }

        function onCompleteHandler() {
                
                return (

                );
        }


}

export default TodoList;