// todo.js

const initialState =

    [
        {                                     /////////뭔가를: 넣어야하는데 
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

        },
        {
            id: 3,
            title: "44를 배워봅시다.",
            body: "44 컴포넌트는?",
            isDone: false

        }]

// Actions

const LOAD = 'todo/LOAD';
const CREATE = 'todo/CREATE';
const UPDATE = 'todo/UPDATE';
const REMOVE = 'todo/REMOVE';

// Reducer

export default function reducer(state = initialState, action = {}) {  
    
    switch (action.type) {
        
        case "todo/CREATE": {
            const new_todo = [state.todo, action.todo];
            console.log(new_todo)
            return { Object:{} };  //////////리턴에 뭐가들어가야해
             
        }

        case "todo/LOAD": {
            const old_todo = [...state.todo, action.todo];   
            return state;
        }

        case "todo/UPDATE": {
            const update_todo = state.map(
                todo =>

                    todo.id === action.id // id 가 일치하면
                        ? { ...todo, done: !todo.done } // done 값을 반전시키고
                        : todo // 아니라면 그대로 둠
            );
        }

        case "todo/REMOVE": {
            const remove_todo = state.filter(
                todo => todo.id !== action.id
            );
        }

        default:
            return state;
    }
}

// Action Creators
export function creatTodo(todo) {
    return { type: CREATE, todo: todo };     //key: value
}

export function loadTodo(todo) {    
    return { type: LOAD, todo: todo };
}

export function updateTodo(todo) {  
    return { type: UPDATE, todo: todo };
}

export function removeTodo(todo) {  
    return { type: REMOVE, todo: todo };
}

