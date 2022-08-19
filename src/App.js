import React from "react";
import TodoList from "./pages/TodoList";  //TodoList를 return 해 주어야 하므로 import 해온다.

function App() {                      //컴포넌트 이름은 대문자화. 꼭 파일 이름이 아니어도 export defualt 와 이름이 같으면 작동하지만 제일 처음 함수는 파일명으로 하는 게 알아보기 편할듯             

  return <TodoList />;                //하위 컴포넌트인 TodoList를 Rendering 함
}

export default App;                   