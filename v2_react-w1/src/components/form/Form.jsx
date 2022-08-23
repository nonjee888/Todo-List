import React , { useState }  from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { creatTodo } from "../../redux/modules/todo";
import './style.css';

let id = 3; 

function Form() {    

    const todo = useSelector((state) => state.todo)
    console.log(todo)
    const dispatch = useDispatch();
   
    const initialState = {
        id:id++, 
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
        event.preventDefault() 
        // setTodos([...todos, {...inputTodo, id:number}])
        setInputTodo(initialState)
        dispatch(creatTodo({...inputTodo, id:id++}));
        // number++; 
        console.log(dispatch)  
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