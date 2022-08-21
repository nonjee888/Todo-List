import React , { useState }  from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { creatTodo } from "../../redux/modules/todo";

import './style.css';

let number = 3; 

function Form() {    
    
    const [todos, setTodos] = useState([      
    {
      id: 1,                                  
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

    const todo = useSelector((state) => state.todo) 
    const dispatch = useDispatch();

    const initialState = {
        id:number, 
        title: "", 
        body: "", 
        isDone: false} //초기값

    const [inputTodo, setInputTodo] = useState(initialState) 
    
    const onChangeHandler=(event)=>{
        const {value, name} = event.target  
        console.log(value, name)  
        setInputTodo({...inputTodo, [name]: value})   
    }   

    const onSubmitHandler=(event)=>{
        console.log(event)
        event.preventDefault() 
        setTodos([...todos, {...inputTodo, id:number}])   
        setInputTodo(initialState)
        number++; 
        dispatch(creatTodo({...inputTodo, id:number}));
         
    }

    return (
        <form  onSubmit={onSubmitHandler} className="add-form">
            <div className="input-group">
                <label className="form-label">
                    제목</label>
                <input
                    className="add-input1"
                    type='text'
                    name='title'
                    value={inputTodo.title}        //input1의 value값은 inputTodo의 title
                    onChange={onChangeHandler}/>   

                <label className="form-label">
                    내용</label>
                <input
                    type="text"
                    name="body"
                    className="add-input2"
                    value={inputTodo.body}         //input2의 value값은 inputTodo의 body
                    onChange={onChangeHandler}/>          
            </div> 
            <button 
            className="addTodos"
            >      
                추가하기
                </button>
        </form>
    );
}

export default Form;