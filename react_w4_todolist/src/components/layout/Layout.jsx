import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { create_todos } from "../../redux/modules/todo";
import styled from "styled-components";

let id=2;
function Layout({children}) {      
    
    // const todo = useSelector((state) => state.todo)
    
    const dispatch = useDispatch();
    
    const [inputTodo, setInputTodo] = useState({
        id:2,
        title: "",
        body: "",
        isDone: false
    })
    
    const onChangeHandler=(event)=>{
        const {value, name} = event.target
        // console.log(value,name)
        setInputTodo({...inputTodo, [name]: value})
    }

    const onSubmitHandler=(event)=>{
        dispatch(create_todos({...inputTodo, id:id++}))
        event.preventDefault()
        setInputTodo({...inputTodo, title: '', body: ''})
    }

    return (
    <div>
        <Layout1>
            <Header>
                <div>My Todo List</div>
                <div>React</div>
            </Header>

            <Form onSubmit={onSubmitHandler}>
                <Inputgroup>
                    <FormLabel>
                        제목</FormLabel>
                    <Addinput1
                        type='text'
                        name='title'
                        value={inputTodo.title}        //input1의 value값은 inputTodo의 title
                        onChange={onChangeHandler}
                        />

                <FormLabel>
                        내용</FormLabel>
                    <Addinput2
                        type="text"
                        name="body"
                        value={inputTodo.body}         //input2의 value값은 inputTodo의 body
                        onChange={onChangeHandler}
                        />
                </Inputgroup>
            <Button
                    className="addTodos"
                    type="submit"
                >
                    추가하기
                </Button>
                </Form>
                {children}            
        </Layout1>
        </div>
    )

}

export default Layout;

const Layout1 = styled.div`
    margin : 0 auto;
    max-width : 1200px;
    min-width : 800px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    border:silver solid 1px;
    height: 50px;
    align-items: center;
    padding-inline: 20px;
    max-width : 1200px;
`;

const Form = styled.form`
    background-color: #eee;
    border-radius: 12px;
    height: 50px;
    margin: 0 auto;
    padding: 30px;
    justify-content: space-between;
    display :flex;
    align-items: center;
`;

const Inputgroup = styled.div`
    align-items: center;
    display: flex;
`;

const FormLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
`;
const Addinput1 = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
`;
const Addinput2 = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
`;
const Button = styled.button`
    background-color: teal;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    height: 40px;
    width: 140px;
    color: white;
`;