import Layout from "./component/layout/Layout";
import TodoList from "./pages/TodoList";
import { useState } from "react";
import "./App.css";

function App() {

return (
  <TodoList />
)
 
  

//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [todos, setTodos] = useState([

//   ]);
//   return (

//     <div className="Layout">
//       <div className="header">
//         <div>My Todo List</div>
//         <div>React</div>
//       </div>

//       <div className="form_box">
//         <div className="input-group">
//           <label className="form-label">제목</label>
//           <input
//             type="text"
//             value={title}
//             className="input1"
//             onChange={(event) => {
//               setTitle(event.target.value);
//             }}
//           />
//           <label className="form-label">내용</label>
//           <input
//             type="text"
//             value={body}
//             className="input2"
//             onChange={(event) => {
//               setBody(event.target.value);
//             }}
//           />
//         </div>
//         <button className="add-button"
//           onClick={() => {
//             setTodos([...todos, { id: todos.length + 1, title: title, body: body }]);
//           }}
//         >
//           추가하기
//         </button>
//       </div>

//       <div className="list-container">
//         <h2 className="list-tittle">Working.. 🔥</h2>
//         <div className="list-wrapper">
//           <div >
//             {todos.map((todo) => (
//               <div className="todos-container">
//                 <h2 className="todo-title" key={todo.id}>
//                   <p>{todo.title}</p>
//                 </h2>
//                 <p>{todo.body}</p>
//                 <div className="todo-button-set">
//                   <button className="todo-delete-botton botton">삭제하기</button>
//                   <button className="todo-complete-botton botton">완료</button>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//         <h2 className="list-tittle">Done..! 🎉</h2>

//       </div>
//     </div>
//   );
}


export default App;