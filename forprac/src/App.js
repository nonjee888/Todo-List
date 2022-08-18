import logo from './logo.svg';
import './App.css';
import React from "react";
import Text from "./Text";

class App extends React.Component{
constructor(props){
super(props);

this.state = {};
this.circle = React.createRef(null);
}

hoverEvent = (e) => {
  console.log(e.target);       //이 이벤트가 발생한 요소가 뭔지 보여줌
  console.log(this.circle.current);     // 우리가 ref로 잡아준 요소와 e.target이 같은지 확인해보자. 두개가 같은 값이므로 this.circle.current 써도 무방
  this.circle.current.style.background = "pink";
}

componentDidMount(){
  console.log(this.circle);
  this.circle.current.addEventListener("mouseover", this.hoverEvent);        //addEventListener에 1. 어떤 이벤트, 2. 어떤 행동 할지 두가지 인자 넣어줌
}

componentWillUnmount() {
  this.circle.current.removeEventListener("mouseover", this.hoverEvent);    //component가 사라질 때, 이벤트리스너가 사라진다. 
}

render() {
return (
<div style={{width: "100vw", height:"100vh", textAlign:"center"}}>
<Text/>
<div style={{margin:"auto", width: "250px", height: "250px", background:"green", borderRadius:"250px"}} ref={this.circle}></div>

</div>
);
}
}

export default App;