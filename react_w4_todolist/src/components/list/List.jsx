import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom";
import { remove_todos, update_todos } from "../../redux/modules/todo";
import styled from "styled-components";

function List() {                        

    const history = useHistory();
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todo.todos)
    console.log(todos) 
    const onRemove = (selectedId) => {                    
        dispatch(remove_todos(selectedId))                            
    }   

    const TobeDone = (selectedId) => {                    
        dispatch(update_todos(selectedId))                                  
    };

    return (
        <ListContainer>
            <H2>Working.. 🔥</H2>
            <ListWrapper>
                {todos.map((todo) => {
                    if (todo.isDone === false) {
                        return( 
                            <TodoContainer key={todo.id}>
                            <Todobox>
                            <Details
                            key={todo.id} 
                            onClick={() => { 
                                history.push("/detail/" + todo.id)
                                }}
                                >상세보기</Details>
                            <TodoTitle>{todo.title}</TodoTitle>
                            <TodoBody id="body">{todo.body}</TodoBody>
                            </Todobox>
                            <ButtonSet>
                                <Delete onClick={() => { onRemove(todo.id); }}
                                    >삭제하기</Delete>
                                <Complete onClick={() => TobeDone(todo.id)}
                                    >
                                    {todo.isDone ? "취 소" : "완 료"}
                                </Complete>
                            </ButtonSet>
                        </TodoContainer>    
                    )}
                }
                )}
            </ListWrapper>
            <H2>Done..! 🎉</H2>
            <ListWrapper>
                {todos.map((todo) => {
                    if (todo.isDone === true) {
                        return( 
                            <TodoContainer key={todo.id}>
                            <Todobox>
                            <Details
                            key={todo.id} 
                            onClick={() => { 
                                history.push("/detail/" + todo.id)
                                }}
                                >상세보기</Details>
                            <TodoTitle>{todo.title}</TodoTitle>
                            <TodoBody id="body">{todo.body}</TodoBody>
                            </Todobox>
                            <ButtonSet>
                                <Delete onClick={() => { onRemove(todo.id); }}
                                    >삭제하기</Delete>
                                <Complete onClick={() => TobeDone(todo.id)}
                                    >
                                    {todo.isDone ? "취 소" : "완 료"}
                                </Complete>
                            </ButtonSet>
                        </TodoContainer>    
                    )}
                }
                )}
            </ListWrapper>

        </ListContainer>
    );
};

export default List;

const ListContainer = styled.div`
  padding: 0 24px;
  max-width : 1200px;
  min-width : 800px;
  margin: 0 auto;
`

const H2 = styled.h2``;

const ListWrapper = styled.div`
  flex-wrap: wrap;
  gap: 12px;
  display: flex;  
`
const TodoContainer = styled.div`
  border: teal 4px solid;
  border-radius: 12px;
  height: 165px;
  width: 270px;
  padding: 12px 24px 12px;    
`
const Todobox = styled.div``;

const Details = styled.div``;

const TodoTitle = styled.h2``;

const TodoBody = styled.div``;

const ButtonSet = styled.div`
  gap: 10px;
  display: flex;
  margin-top: 24px;    
`
const Delete = styled.button`
  background-color: white;
  border: 2px red solid;
  border-radius: 10px;
  height: 40px;
  width: 50%;
`
const Complete = styled.button`
  background-color: white;
  border: 2px teal solid;
  border-radius: 10px;
  height: 40px;
  width: 50%;  
`



