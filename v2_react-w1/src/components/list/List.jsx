import { useSelector } from "react-redux";
import React, {useState} from "react";
import './style.css';
import Todo from '../todo/Todo';

function List() {                        
    
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

    const todo = useSelector((state) => state.todo) 
    console.log(todo)
    const onRemove = (selectedId) => {                    
        console.log(onRemove)
        const tobedoneTodos = todos.filter((todo) => {
        return todo.id !== selectedId
       })
        setTodos(tobedoneTodos)                            
    }

    const TobeDone = (selectedId) => {                    
        console.log(TobeDone)
        const newTodos = todos.map((todo)=> {
         if (todo.id === selectedId) {                 //id 비교 => 넘겨 받은 id 와 기존 todo list 에 있는 id 와 비교. id 가 같다면 => { ...todo } 를 이용하여 기존 객체를 복사. 그리고 { ...todo, isDone: !todo.isDone } 을 이용하여 기존 객체의 isDone 을 한번 뒤집어 취소로 변경됨.
            return {...todo, isDone: !todo.isDone}     // id 가 다르다면 => 아무런 변화도 주지 않는다.obeDone 함수 실행시 todo.id와 selectedId가 같으면 isDone이 false인 todo를 반환함. 
        } else {
            return {...todo} // 아무 변화 없음                           
        }
     })
        setTodos(newTodos)                                  
    };

    return (
        <div className="list-container">
            <h2 className="list-title">Working.. 🔥</h2>
            <div className="list-wrapper">
                {todos.map((todo) => {
                    if (todo.isDone === false) {
                        return( 
                        <Todo 
                        key={todo.id}
                        todo={todo} 
                        setTodos={setTodos} 
                        onRemove={onRemove} 
                        TobeDone={TobeDone}
                        />  //todo가 isDone이 false라면 Working에 렌더링 되도록 Todo에게 정보전달
                    )}
                }
                )}
            </div>
            <h2 className="list-title">Done..! 🎉</h2>
            <div className="list-wrapper">
                {todos.map((todo) => {
                    if (todo.isDone === true) {
                        return( 
                        <Todo 
                        key={todo.id}
                        todo={todo} 
                        setTodos={setTodos} 
                        onRemove={onRemove} 
                        TobeDone={TobeDone} 
                        />  //todo가 isDone이 true라면 Done에 렌더링 되도록 Todo에게 정보전달
                    )}
                }
                )}
            </div>

        </div>
    );
}

export default List;