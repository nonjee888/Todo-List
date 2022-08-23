import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { todos_id } from "../redux/modules/todo";
import styled from "styled-components";

const Detail = () => {         
    const { id } = useParams();
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todo.todos)
    console.log(todo)
    const history = useHistory();
    useEffect(() => { dispatch(todos_id(id)); }, [dispatch, id]);


    return (
        
        <Background>
            <DetailCard>
                <DetailHeader>
                    <div>ID:{todo.id}</div>
                    <Button onClick={() => {
                        history.goBack("/");
                    }}>이전으로
                    </Button>
                </DetailHeader>
                <div className="">
                    <div className="wrap-detail">

                        <Title>{todo.title}</Title>
                        <p>{todo.body}</p>

                    </div>
                </div>
            </DetailCard>
        </Background>
    )
}

export default Detail;

const Background = styled.div`
border: 2px solid #eee;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;    
`
const DetailCard = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;    
`
const DetailHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;  
`
const Title = styled.h1`
  padding: 0 24px;
`
const Button = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`