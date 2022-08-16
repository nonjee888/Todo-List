import React from "react";
import './style.css';
import Todo from '../todo/Todo';

function List({setTodos, todos}) {                        //todos와 setTodos를 부모컴퍼넌트에게서 받았음
                                                          //filter 메소드는 각요소마다 콜백함수를 실행해서 리턴값을 true인것만 걸러내는 함수
    const onRemove = (selectedId) => {                    //함수 실행시 todos 배열에서 todo.id가 피라미터와(selectedId) 일치하지 않는 요소만 추출해서 새로운 배열을 만듦. (= todo.id가 selectedId인 것을 제거하고 나머지만 배열에 남는다.)                                  
        console.log(onRemove)
        const tobedoneTodos = todos.filter((todo) => {
        return todo.id !== selectedId
       })
        setTodos(tobedoneTodos)                            //결과적으로 그 배열은 완료해야 할 리스트 = tobedoneTodos가 된다. 
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
                        todo={todo} 
                        key={todo.id} 
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
                        todo={todo} 
                        key={todo.id} 
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