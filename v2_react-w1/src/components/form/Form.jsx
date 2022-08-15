import React ,{useState, useRef} from "react";
import './style.css';

function Form({todos, setTodos}) {    //todos와 setTodos를 부모컴퍼넌트에게서 받았음

    const initialState = {id: 0, title: "", body: "", isDone: false} //초기값
    const [inputTodo, setInputTodo] = useState(initialState) // 기본식 const [state, setState] = useState(initialState); 최초로 렌더링 하는동안 반환된 state는 첫번째 전달된 인자 initialState의 값과 같다
    
    //고유 id값을 설정해주기 위해 useRef사용.
    const nextId = useRef(2) //초기 default값이 0,1 까지 설정되어있으므로 다음 아이디 값은 2가 된다.
    
    const onChangeHandler=(event)=>{
        //객체 비구조화 할당으로 인해 event.target.name과 event.target.value에서 value와 name을 추출해 사용할 수 있게 된다.
        const {value, name} = event.target  //value는 인풋에 입력되는 입력값, name은 title인지 body인지를 구분함.
        console.log(value, name)  //input에 글씨를 써보면 개발자 도구 console에 잘 찍히는지 확인이 가능하다.
        setInputTodo({...inputTodo, [name]: value, id: nextId.current})   //spread형식으로 넘겨준 이유는 함수에서 rest로 받게 되면 배열로 받게 되어 배열이 배열로 감싸져서
        nextId.current++ // 함수가 실행될때마다 아이디도 하나씩 같이 증가             //값이 이상하게 나오기 때문에 배열의 값을 넘겨주기 위해 spread식으로 매개변수를 준 것
        
    }   

    const onSubmitHandler=(event)=>{
        event.preventDefault() // from의 기능 중 submit을 하면 자동으로 페이지를 리랜더링하는데 이걸 하면 정보가 다 날아가기 때문에 이를 방지
        setTodos([...todos, inputTodo])    //setTodos = todos의 요소에 inputTodo를 새로이 추가해줬음. concat()메소드 써도 된다는데 어떻게?
        setInputTodo(initialState) // initialState를 선언해주어 submit 이벤트 생성시 input창을 빈칸으로 셋팅해준다 
    }
  

    return (
        <form className="add-form">
            <div className="input-group">
                <label class="form-label">제목</label>
                <input
                    className="add-input1"
                    type='text'
                    name='title'
                    value={inputTodo.title}        //input1의 value값은 inputTodo의 title
                    onChange={onChangeHandler}/>   

                <label class="form-label">내용</label>
                <input
                    type="text"
                    name="body"
                    className="add-input2"
                    value={inputTodo.body}         //input2의 value값은 inputTodo의 body
                    onChange={onChangeHandler}/>          
            </div> 
            <button onClick={onSubmitHandler} class="addTodos">      
                추가하기
                </button>
        </form>
    );
}

export default Form;